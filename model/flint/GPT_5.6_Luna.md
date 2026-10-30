# Recursive Flint — findings by GPT 5.6 Luna

- Source: Recursive Superintelligence / Flint
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Recursive Flint
- **Short description:** Recursive's open-weight mixture-of-experts language model for fast local coding agents, repository work, bug fixing, and test generation. It is a text-only coding model rather than a general multimodal assistant.
- **Provider / access:** Local deployment from the official `RecursiveSI/flint` checkpoint through SGLang, vLLM-compatible tooling, or the accompanying Recursive inference stack; no hosted API price was verified for the exact checkpoint. The checkpoint supports OpenAI-compatible tool calls.
- **Release / knowledge:** Released in October 2026; the official model card states a June 2026 knowledge cutoff.
- **IDs:** `RecursiveSI/flint` (Hugging Face); no verified OpenCode Zen or other hosted Free ID was found.
- **Context window:** The official checkpoint card documents 262,144 tokens including prompt and generated output. Recursive's launch post describes configurations up to 512K; the scored checkpoint specification uses the more conservative 262K figure.
- **Modalities:** Text in/text out, reasoning, and multi-turn tool use; no image, audio, or video input/output was verified.
- **Pricing (as of 2026-10-30):** Apache-2.0 open weights with no per-token charge; local hardware and serving costs apply. No exact hosted price was verified.
- **Architecture:** Decoder-only MoE Transformer; 39.8B total parameters and approximately 2.5B active per token, with 256 routed experts, six selected per token, and an always-active shared expert. Apache 2.0.

### Raw benchmarks found

> Official results use Recursive's documented settings (temperature 1.0, top-p 0.95, top-k 20; Terminus 2 for Terminal-Bench and mini-swe-agent for SWE-bench). The independent run used a single RTX PRO 6000 and small seeded samples, so it corroborates the direction rather than replacing the official full-set results.

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (Recursive official model card; Terminus 2, at least five attempts)
- Tool calls: **supported** (official model card and serving examples); no verified public Tau3, GDPval, Claw-Eval, or MCP score found

Reasoning / knowledge:

- General reasoning suite: **no verified public GPQA, HLE, or Intelligence Index score found**
- The model card reports reasoning mode, but coding-agent results are not substituted for general reasoning scores.

Coding:

- SWE-bench Pro v2: **89.7%** (Recursive official model card; mini-swe-agent, average pass@1 over at least five attempts)
- SWE-bench Verified: **74.2%** (Recursive official model card; mini-swe-agent, average pass@1 over at least five attempts)
- LiveCodeBench v6: **82.2%** (**37/45**) (independent Data Craftsman run on one RTX PRO 6000; one attempt per sampled task)
- SWE-bench Verified, offline independent sample: **80.0%** (**40/50**) (Data Craftsman; no network, one attempt per sampled task)
- The independent online SWE-bench run scored 48/50 but is invalid for comparison because the agent retrieved fixes over the network; it is not used as a score.

Long context:

- No verified public retrieval curve at a stated window length; the official checkpoint card documents 262,144 tokens, while the launch post discusses a 512K-capable configuration.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 at 54.9% and verified multi-turn tool-call support establish capable agent use, but no public Tau3/GDPval/Claw-style result was found and the main evidence is vendor-reported.
- **Reasoning: 55/100.** Flint exposes a reasoning mode, but no exact-model GPQA, HLE, LCR, or composite intelligence score was verified; coding results cannot stand in for broad reasoning evidence.
- **Context window: 75/100.** The exact checkpoint documents 262K tokens, in the 200K–500K methodology tier. The 512K launch claim is retained as a configuration note, not used to inflate the scored limit.
- **Multimodal: 15/100.** The official model card verifies text input and output only.
- **Coding: 85/100.** Recursive reports 89.7% SWE-bench Pro v2 and 74.2% SWE-bench Verified; an independent sample reproduced strong results at 82.2% LiveCodeBench v6 and 80.0% offline SWE-bench Verified. Small samples, vendor harness differences, and the lack of a full independent reproduction cap the score below the frontier ceiling.
- **Cost efficiency: 100/100.** Apache-2.0 open weights have no per-token charge, although local hardware and electricity are not free.
- **Overall Score: 60/100.** Half-up mean of the five non-cost dimensions: `(68 + 55 + 75 + 15 + 85) / 5 = 59.6`, rounded to 60. Best fit is a privacy-preserving local coding agent; use a broader model when multimodal input or general reasoning is required.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-30
- Method: three-plus independent fresh web searches, followed by direct comparison of Recursive's launch post and Hugging Face model card, the independent Data Craftsman reproduction, and independent reporting from WIRED and MindStudio. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Sources

- Recursive launch announcement: https://recursive.com/updates/introducing-recursive-flint
- Official checkpoint and benchmark card: https://huggingface.co/RecursiveSI/flint
- Independent LiveCodeBench/SWE-bench reproduction: https://github.com/DataCraftsmanAU/flint-independent-eval
- Independent coverage and hands-on report: https://www.wired.com/story/recursive-self-improvement-flint-latest-model-scary-good
- Independent benchmark explanation: https://www.mindstudio.ai/blog/recursive-flint-swe-bench-scores
