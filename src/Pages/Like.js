import React from 'react'
import { useSelector } from 'react-redux';


export default function Like() {
    let state = useSelector((state) => state.GlavniyRed);
    let { carddata } = state
    console.log(state);
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>name </th>
                        <th>price </th>
                        <th>chegirma</th>
                        <th> yoqtirilgan </th>
                        <th>soni</th>
                    </tr>
                </thead>
                <tbody>
                    {carddata.filter((p) => p.like).length > 0 ? (carddata.filter((p) => p.like).map((elem, index) => {
                            return (
                                <tr key={elem.id}>
                                    <th> {index + 1} </th>
                                    <td> {elem?.nomi} </td>
                                    <td> {elem?.narxi} </td>
                                    <td> {elem?.skidka} </td>
                                    <td> {elem?.like ? "yoqdi" : "yoqmadi"} </td>
                                    <td> {elem?.art} </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td
                                colSpan={100}
                                style={{ textAlign: "center", fontSize: "30px" }}
                            >
                                no Data...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
