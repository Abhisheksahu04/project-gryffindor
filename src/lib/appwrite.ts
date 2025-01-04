import { Account, Client, Databases, ID } from "appwrite";

export const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_CLIENT_ID!);

export const account = new Account(client);
export const database = new Databases(client);
export { ID };

export async function createDocument<T extends Omit<Document, keyof Document>>(
    collectionId: string,
    data: T,
    documentId?: string
) {
    try {
        return await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            collectionId,
            documentId ? documentId : ID.unique(),
            data
        );
    } catch (error) {
        throw error;
    }
}

export async function getDocument(collectionId: string, documentId: string) {
    try {
        return await database.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            collectionId,
            documentId
        );
    } catch (error) {
        throw error;
    }
}

export async function updateDocument<
    T extends Partial<Omit<Document, keyof Document>>
>(collectionId: string, documentId: string, data: T) {
    try {
        return await database.updateDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            collectionId,
            documentId,
            data
        );
    } catch (error) {
        throw error;
    }
}

export async function deleteDocument(collectionId: string, documentId: string) {
    try {
        return await database.deleteDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            collectionId,
            documentId
        );
    } catch (error) {
        throw error;
    }
}
