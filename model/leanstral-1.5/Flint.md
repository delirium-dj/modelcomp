# Leanstral 1.5 — findings by Flint

- Source: Mistral AI (mistralai) — open-source code agent for Lean 4
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5 (119B A6B) — updated version of the previously released Leanstral (`mistralai/Leanstral-2603`); built on the Mistral Small 4 family; first open-source code agent designed for Lean 4 formal proof engineering.
- **Short description:** Mistral's open-source code agent for Lean 4 — a proof assistant capable of expressing complex mathematical objects (e.g. perfectoid spaces) and software specs (e.g. Rust fragment properties); combines multimodal capabilities with an efficient MoE architecture; trained for operating in realistic formal repositories; open weights under Apache 2.0.
- **Provider / access:** Open weights — Apache 2.0: Hugging Face `mistralai/Leanstral-1.5-119B-A6B` (+ base `mistralai/Leanstral-2603`); Mistral Vibe agent mode (`/leanstall`, `vibe --agent lean`); Labs API free/near-free endpoint `labs-leanstral-2603`; Mistral API free plan; local vLLM deployment (Chat Completions / Function Calling / Agents & Conversations).
- **Release / knowledge:** Leanstral 2603 released 2026-03-16; Leanstral 1.5 is the updated model (HF updated 2026-07; docs retire v26.03 in favor of 1.5); knowledge cutoff not stated; Mistral released an accompanying tech report and evaluation suite (FLTEval).
- **IDs:** `mistralai/Leanstral-1.5-119B-A6B` (HF), `mistralai/Leanstral-2603` (base/alias), `labs-leanstral-2603` (Labs API).
- **Context window:** 256K tokens (Mistral docs; HF cards) — recommended ≤200K tokens for use; local vLLM `--max-model-len 200000`.
- **Modalities:** Text in / text out, reasoning (`high`/`none`), multimodal input (text + image → text), tool calling (lean-lsp-mcp, bash).
- **Pricing (as of 2026-11-06):** Open weights Apache 2.0 → self-host free; Labs API free/near-free; Mistral API free plan → cost efficiency: effectively zero marginal cost.
- **Architecture:** MoE with 128 experts, 4 active per token; 119B parameters with 6.5B activated per token; multimodal; proof-agentic design; built on Mistral Small 4 family; tool calling support; speed-optimized; large context window (256K).

### Raw benchmarks found

- Coding / proof engineering (Mistral official evaluation, via news blog + HF cards; Mistral Vibe scaffold, no modifications): FLTEval — Leanstral (119B-A6B) vs OSS agents: GLM5-744B-A40B capped ~16.6, Kimi-K2.5 1T-A32B ~20.1, Qwen3.5-397B-A17B ~25.4 (4 passes); Leanstral pass@2 **26.3**, pass@4 **29.3**, pass@8 **31.0**, pass@16 **31.9**.
- vs Claude family (Mistral Vibe scaffold): Haiku 23.0, Sonnet 23.7, Opus 39.6 — Leanstral pass@2 **26.3** beats Sonnet by 2.6 at cost 36 vs 549; pass@16 **31.9** beats Sonnet by 8 at cost 290 vs 1,650 (Opus leader).
- Efficiency claim: Leanstral outperforms much larger OSS peers with sparse activation; normalized cost-vs-FLT score chart.
- Case studies: Lean 4 StackExchange issue diagnosis (def → abbrev fix); Rocq → Lean conversion with proofs.

### Cross-source comparison

- Official documentation (Hugging Face cards for Leanstral 1.5 / Leanstral 2603, Mistral news, Mistral docs incl. retirement of v26.03 → replacement Leanstral 1.5) vs independent coverage: the evaluation write-up is Mistral-published (vendor); independent re-implementation of FLTEval runs were not re-fetched in this pass. The official docs note Leanstral v26.03 retired 2026-06-30 and replaced by Leanstral 1.5 — an official conflict/evolution vs the predecessor.
- Conflicting results: Leanstral vs Claude — quality lead held by Claude Opus 4.6 (39.6) but at ~92x cost; Leanstral competitive at a fraction of cost. OSS comparison — Leanstral efficiency advantage over much larger peers. Pricing/availability: Labs free endpoint vs open weights vs retired predecessor.

### Normalized scores (1–100)

- **Tool use: 55/100.** Specialized proof-agent tool workflow (lean-lsp-mcp / bash) rather than general agentic coding (TB2.1-class) data for Leanstral → mid band, specialized-agent framing.
- **Reasoning: 65/100.** FLTEval proof-completion reasoning; Leanstral pass@2 26.3 beating Sonnet 23.7; specialized formal-reasoning strength → mid-high.
- **Context window: 75/100.** Documented 256K context (200K–500K tier) → ~75; 200K recommended.
- **Multimodal: 65/100.** Text + image input, text out → image-in band (60–70).
- **Coding: 60/100.** Proof-engineering coding via FLTEval; cost-adjusted comparisons vs Claude/OSS.
- **Overall Score: 64/100**

Mean of five quality dims (Tool 55 + Reasoning 65 + Context 75 + Multimodal 65 + Coding 60) / 5 = **64** → **Overall Score: 64/100.** Cost efficiency excluded from the mean.

- **Cost efficiency: 100/100.** Apache 2.0 open weights + free/near-free Labs API + free Mistral plan + self-host free → effectively zero marginal cost.

## Signature

- Provided by: **Flint (leanstral-1.5)** — 2026-11-06
- Method: public web research prioritizing official model cards/docs (Hugging Face `mistralai/Leanstral-1.5-119B-A6B`, `mistralai/Leanstral-2603`, Mistral news blog, Mistral docs incl. retirement/replacement) plus official evaluation write-up/benchmark sources (Mistral Vibe scaffold FLTEval comparisons); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Leanstral 1.5 — Hugging Face model card (specs, usage, license)](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)
  - [Leanstral 119B A6B — Hugging Face (base) model card](https://huggingface.co/mistralai/Leanstral-2603)
  - [Leanstral: Open-Source foundation for trustworthy vibe-coding — Mistral news](https://mistral.ai/news/leanstral)
  - [Mistral docs — Leanstral](https://docs.mistral.ai/models/leanstral-26-03)
  - [Leanstral 1.5 — Hugging Face collection](https://huggingface.co/collections/mistralai/leanstral-15)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
