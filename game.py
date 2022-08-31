import socket
import pygame

window = pygame.display.set_mode((600, 600), pygame.RESIZABLE)
screen = pygame.Surface((600, 600))


game = True
disconnect = False

pygame.init()

font = pygame.font.Font(None, 32)

player_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
player_socket.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)
player_socket.connect(('localhost', 9090))
pygame.display.set_caption("Игра-тест", )

clicked = 0

clock = pygame.time.Clock()
FPS = 60
data = 0

while game:

    window.blit(screen, (0, 0))
    screen.fill((255, 255, 255))
    screen.blit(font.render(("Нажимай на клавиши! Ты уже нажал " + str(data) + " раз"), 1, 'black'), (0, 0))

    data = player_socket.recv(1024)
    data = data.decode()

    pygame.display.flip()
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            game = False
        if e.type == pygame.KEYDOWN:
            clicked += 1
            player_socket.send(str(clicked).encode())

    # print(data)
    clock.tick(FPS)

pygame.quit()