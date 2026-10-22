# Flint — findings by Beam

- Source: Recursive Superintelligence (Recursive) / Flint, `RecursiveSI/flint`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Open-weight reasoning MoE from Recursive Superintelligence; Apache 2.0; reasoning always on; tool use via runtime; text-only.
- **Provider / access:** OpenAI-compatible local serving (Ollama `flint`, llama.cpp, Unsloth/LM Studio GGUFs, vLLM, SGLang, rec engine); hosted/free API via Recursive; OpenCode Zen `opencode/flint`.
- **Release / knowledge:** Released 2026-10-21 (some sources 2026-10-19); knowledge cutoff June 2026.
- **IDs:** `RecursiveSI/flint`, local `flint`, `opencode/flint`.
- **Context window:** 262,144 tokens documented (Recursive flags up to 512K, recommends 256K); local client gen budget 65,536 incl. reasoning.
- **Modalities:** Text in / text out; reasoning always on; tool use via runtime; text-only.
- **Pricing (as of 2026-10-22):** Free.
- **Architecture:** MoE 39.8B total / 2.5B active, 49 layers, sliding window 513, 256 experts (6 routed + shared), hidden 2048, vocab 150,144; trained from scratch; Apache 2.0.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **54.9%**

Coding:
- SWE-bench Pro v2: **89.7%** (vendor-reported)

Long context:
- 262,144 documented; max output 235.9K (LMC) vs local client gen budget 65,536.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 54.9%; caps at no published MCP-Atlas/Toolathlon.
- **Reasoning: 55/100.** No verified public reasoning composite; mid band with reasoning always on.
- **Context window: 75/100.** 262,144 tokens (200K–500K tier).
- **Multimodal: 15/100.** Text-only.
- **Coding: 70/100.** SWE-bench Pro 89.7% (vendor-reported), Terminal-Bench 2.1 54.9%.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 54/100.** Mean of five quality dims (55 + 55 + 75 + 15 + 70 = 270 / 5 = 54).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Recursive docs/HF, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.