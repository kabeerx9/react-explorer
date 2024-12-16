'use client'
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TicTacToe() {
    const [board, setBoard] = useState<string[]>(Array(9).fill(''))
    const [currentPlayer, setCurrentPlayer] = useState<string>('X')
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [winningCombination, setWinningCombination] = useState<number[]>([])

    const checkGameState = () => {
        const winningCombinations = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]
        for(const combination of winningCombinations){
            const [a,b,c] = combination
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                setGameOver(true)
                setWinningCombination(combination)
                setTimeout(() => {
                    alert(`${currentPlayer} wins!`)
                }, 0);
                break;
            }
        }
    }

    useEffect(()=>{
        checkGameState();
    },[board])

    const handleCellClick = (index: number)=>{
        if(board[index] === '' && !gameOver){
            const newBoard = [...board]
            newBoard[index] = currentPlayer
            setBoard(newBoard)
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(''))
        setCurrentPlayer('X')
        setGameOver(false)
        setWinningCombination([])
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col justify-center items-center p-4">
            <Card className="w-full max-w-md p-6 space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-800">Tic Tac Toe</h1>
                    <p className="text-gray-600">
                        Current Player: <span className="font-bold text-indigo-600">{currentPlayer}</span>
                    </p>
                </div>

                <div className="aspect-square w-full bg-white rounded-lg shadow-inner">
                    <div className="grid grid-cols-3 gap-2 p-2 h-full">
                        {board.map((cell, index) => (
                            <div
                                onClick={() => handleCellClick(index)}
                                key={index}
                                id={String(index)}
                                className={cn(
                                    "relative rounded-md cursor-pointer transition-all duration-200",
                                    "flex items-center justify-center font-bold text-4xl",
                                    "hover:bg-gray-50 active:scale-95",
                                    "border-2 border-gray-200",
                                    "h-[80px] w-[80px]",
                                    winningCombination.includes(index)
                                        ? "bg-green-100 border-green-400"
                                        : "bg-white",
                                    cell === 'X' ? "text-blue-500" : "text-rose-500"
                                )}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                </div>

                <Button
                    onClick={resetGame}
                    className="w-full"
                    variant="outline"
                >
                    Reset Game
                </Button>
            </Card>
        </div>
    )
}
