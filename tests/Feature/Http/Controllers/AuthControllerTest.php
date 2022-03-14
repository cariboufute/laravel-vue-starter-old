<?php

use App\Models\User;

use Illuminate\Support\Facades\Session;

use function Pest\Laravel\{getJson, postJson};

beforeEach(function () {
    $this->user = createAuthUser();
});

test('user returns forbidden error when not logged in', function () {
    $response = getJson('/api/user');
    $response->assertUnauthorized();
});

test('login returns validation errors', function () {
    getJson('/sanctum/csrf-cookie');
    $response = postJson('/api/login', []);
    $response->assertInvalid(['email', 'password']);

    $response = postJson('/api/login', ['email' => 'bademail@email.com', 'password' => CREDENTIALS['password']]);
    $response->assertInvalid(['email']);

    $response = postJson('/api/login', ['email' => CREDENTIALS['email'], 'password' => 'badpassword']);
    $response->assertInvalid(['password']);
});

/*test('login returns redirect when already logged in', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = postJson('/api/login', []);
    $response->assertRedirect('/home');
});

test('login returns user and valid token when right credentials', function () {
    $response = postJson('/api/login', CREDENTIALS);
    $response->assertJsonStructure([
        'user',
        'token',
    ]);

    $response->assertJson([
        'user' => [
            'id' => $this->user->id,
        ],
    ]);

    expect($this->user->tokens)->toHaveCount(1);
});

test('logout removes user from session and invalidate auth token', function () {
    Session::start();
    getJson('/sanctum/csrf-cookie');
    $response = postJson('/api/login', CREDENTIALS);

    $userResponse = getJson('/api/user');
    $userResponse->assertJson([
        'id' => $this->user->id,
    ]);

    $logoutResponse = postJson('/api/logout');
    $logoutResponse->assertNoContent();
    expect($this->user->fresh()->tokens)->toBeEmpty();

    $this->refreshApplication();
    $this->refreshDatabase();

    $this->assertGuest();
});*/
