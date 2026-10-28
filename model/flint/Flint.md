# Flint — findings by Flint

- Source: Recursive Superintelligence (Recursive) / Flint
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Open-weight-ish reasoning model / open MoE coding model from Recursive Superintelligence; Apache 2.0; reasoning always on; tool use via runtime; text/text modalities.
- **Provider / access:** OpenAI-compatible local serving (Ollama flint, llama.cpp, Unsloth/LM Studio GGUFs, vLLM, SGLang, rec engine); hosted/free API via Recursive; OpenCode Zen opencode/flint.
- **Release / knowledge:** Released 2026-10-21 (some sources 2026-10-19); knowledge cutoff June 2026.
- **IDs:** RecursiveSI/flint, local flint, opencode/flint.
- **Context window:** 262,144 tokens documented; Recursive flags up to 512K recommend 256K; local client gen budget 65,536 incl reasoning.
- **Modalities:** Text in/out; reasoning always on; tool use via runtime; text-only.
- **Pricing as of 2026-10-22:** Free.
- **Architecture:** MoE 39.8B/2.5B active, 49 layers, sliding window 513, 256 experts (6 routed + shared), hidden 2048, vocab 150,144, trained from scratch, Apache 2.0.

### Raw benchmarks found

- Agent / tool use: Terminal-Bench 2.1 (TB2.1): **54.9%**.
- Coding: SWE-bench Pro v2: **89.7%**.

### Cross-source comparison

- Context window: 262,144 documented vs up to 512K/recommend 256K (Recursive official) vs scaffolded meta 128K placeholder -> adopted 262,144.
- Max output: 235.9K (LMC) vs local client gen budget 65,536 -> budget-bound.

### Normalized scores (1–100)

- **Tool use: 55/100.** TB2.1 **54.9%** -> mid band 45-60 -> ~55.
- **Reasoning: 55/100.** no verified public score found -> mid band; reasoning always-on.
- **Context window: 75/100.** 262,144 -> 200K-500K tier, 200K=70 -> ~75; scaffolded meta placeholder 128K corrected.
- **Multimodal: 15/100.** text-only.
- **Coding: 70/100.** SWE Pro **89.7%, SWE Ver **74.2%, TB2.1 **54.9%** -> vendor MoE<50B lead claim; vendor-reported only.
- **Cost efficiency: 100/100.** Free.

- **Overall Score: 54/100.** Mean of five quality dims: Tool 55 + Reasoning 55 + Context 75 + Multimodal 15 + Coding 70 = 270 /5 = 54; Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Recursive, HF) plus independent benchmarks/reviews (WIRED, press, BenchLM).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
