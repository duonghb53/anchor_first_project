import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorFirstProject } from "../target/types/anchor_first_project";

describe("anchor_first_project", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorFirstProject as Program<AnchorFirstProject>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
