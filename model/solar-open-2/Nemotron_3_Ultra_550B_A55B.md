# Solar Open 2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Upstage (`solar-open-2`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weights reasoning model (250B params) with 1M context, exceptional LiveCodeBench 92.4%, strong math (AIME 95.7%, HMMT 93.9%), and Apache 2.0 license.
- **Provider / access:** Upstage Platform, Hugging Face (`upstage/Solar-Open2-250B`), OpenCode Zen (`opencode/solar-open-2` via `https://opencode.ai/inference/openai/v1/chat/completions`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026 (estimated); knowledge cutoff not publicly disclosed.
- **IDs:** `upstage/Solar-Open2-250B` (Hugging Face), `opencode/solar-open-2` (OpenCode Zen). Open weights available for self-hosting (Apache 2.0 license).
- **Context window:** 1,000,000 tokens total (1M per BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Open weights (Apache 2.0) — self-host effectively $0; hosted pricing not publicly disclosed.
- **Architecture:** 250B total parameters; open weights (Apache 2.0 license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench Hard: **28.3%** (Upstage Solar Open 2 model card)
- APEX-Agents: **16.6%** (Upstage Solar Open 2 model card)
- MCP Atlas: **58.2%** (Upstage Solar Open 2 model card)

Reasoning / knowledge:

- MMLU-Pro: **86.2%** (Upstage Solar Open 2 model card)
- GPQA Diamond: **86.3%** (Upstage Solar Open 2 model card)
- HLE without tools: **28.8%** (Upstage Solar Open 2 model card)
- AA LCR: **62.3%** (Upstage Solar Open 2 model card)
- HMMT Feb 2026: **93.9%** (Upstage Solar Open 2 model card)
- AIME 2026: **95.7%** (Upstage Solar Open 2 model card)
- KMMLU-Pro: **78.4%** (Upstage Solar Open 2 model card)
- CLIcK: **90.7%** (Upstage Solar Open 2 model card)
- HRM8K: **92.2%** (Upstage Solar Open 2 model card)

Coding:

- LiveCodeBench v6: **92.4%** (Upstage Solar Open 2 model card)
- SWE-bench Verified: **70.4%** (Upstage Solar Open 2 model card)

Multimodal:

- No verified public multimodal benchmarks found

Long context:

- AA LCR: **62.3%** (Upstage Solar Open 2 model card)

Instruction Following:

- IFBench: **80%** (Upstage Solar Open 2 model card)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** MCP Atlas 58.2%, Terminal-Bench Hard 28.3%, APEX 16.6%. No TB 2.1/4.0, GDPval, OSWorld, Toolathlon, Tau2, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 80/100.** GPQA Diamond 86.3% (near 90%+ frontier), MMLU-Pro 86.2%, AIME 95.7%, HMMT 93.9%, KMMLU-Pro 78.4%, CLIcK 90.7%, HRM8K 92.2%. Capped by HLE 28.8% (below 40%+ frontier), no AA Intelligence Index, CritPt, Omniscience data.
- **Context window: 95/100.** 1M native context; AA LCR 62.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 80/100.** LiveCodeBench 92.4% (exceptional), SWE-bench Verified 70.4% (near 80%+ frontier). No SWE-bench Pro/DeepSWE/LiveCodeBench/FrontierCode/CursorBench data. Capped by minimal coding benchmark coverage.
- **Cost efficiency: 95/100.** Open weights (Apache 2.0) — self-host effectively $0. Methodology: free self-host = 95-99.
- **Overall Score: 66/100.** Half-up mean of (60 + 80 + 95 + 15 + 80) / 5 = 66.0 → 66. Best-fit: exceptional open-weights model for coding and math with 1M context; LiveCodeBench 92.4% and AIME 95.7% are standout; limited agentic benchmarks and text-only limit general use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model card (Upstage Hugging Face), and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.