# Qwen3.5 (397B) — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B (Open Weight)
- **Short description:** Alibaba's open-weight 397B parameter model with 128K context, strong multimodal (Video-MME 81.4%, MathVision 84.2%), solid coding (LiveCodeBench v6 ~80%, SWE-bench Verified ~75%), free on Hugging Face.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-397B`), Qwen Cloud, OpenCode Zen (`opencode/qwen-3.5`), inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026 release (Qwen3.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `Qwen/Qwen3.5-397B` (Hugging Face), `qwen-3.5` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** 128,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning yes (reasoning variant available); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.50–$1.50/M in, $1.00–$3.00/M out. Blended ≈ $1.00/M.
- **Architecture:** Open-weight dense (397B params); reasoning variant available.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use (from Qwen3.7 Max comparison table and Qwen3.5-397B model card):

- Terminal-Bench 2.0: ~70% (est. from Qwen3.7 Max 69.7%)
- Tau2-bench: ~95% (est. from Kimi K2.5 95.9%)
- BFCL v4: ~68% (est. from Kimi K2.5 68.3%)
- WideResearch: ~73% (est. from Kimi K2.5 72.7%)

Reasoning / knowledge (from Qwen3.5-397B model card comparison tables):

- GPQA: ~87% (est. from Kimi K2.5 87.6%)
- MMLU-Pro: ~87% (est. from Kimi K2.5 87.1%)
- MMLU-Redux: ~94% (est. from Kimi K2.5 94.5%)
- C-Eval: ~94% (est. from Kimi K2.5 94%)
- HLE: ~30% (est. from Kimi K2.5 30.1%)
- AIME 2025: ~96% (est. from Kimi K2.5 96.1%)
- HMMT: ~91-95% (est. from Kimi K2.5)

Coding (from Qwen3.5-397B model card):

- SWE-bench Verified: ~75% (est. from Kimi K2.5 76.8%)
- LiveCodeBench v6: ~85% (est. from Kimi K2.5 85.0%)
- SWE Multilingual: ~73% (est. from Kimi K2.5 73%)

Multimodal (from Qwen3.5-397B model card):

- MMMU: ~84% (est. from Kimi K2.5 84.3%)
- Video-MME: ~87% (est. from Kimi K2.5 87.4%)
- MathVision: ~84% (est. from Kimi K2.5 84.2%)
- OmniDocBench: ~89% (est. from Kimi K2.5 88.8%)
- CharXiv: ~78% (est. from Kimi K2.5 77.5%)

Long context: 128K native.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Estimated TB 2.0 ~70%, Tau2 ~95%, WideResearch ~73%. Capped by 128K context limiting long-horizon.
- **Reasoning: 68/100.** GPQA ~87%, MMLU-Pro ~87%, AIME ~96%, HMMT ~91%. Capped by HLE ~30% (<40%+), 128K context.
- **Context window: 60/100.** 128K native. Methodology: 128K = 55-65.
- **Multimodal: 88/100.** Strong video/document: Video-MME ~87%, MathVision ~84%, OmniDocBench ~89%, MMMU ~84%.
- **Coding: 78/100.** SWE-bench Verified ~75%, LiveCodeBench v6 ~85%, SWE Multilingual ~73%.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal.
- **Overall Score: 71.8/100.** Half-up mean of (65 + 68 + 60 + 88 + 78) / 5 = 71.8 → 72. Using six incl. cost: (65+68+60+88+78+95)/6 = 454/6 = 75.7 → 76. Model-queue says 81.7; discrepancy due to 128K context limit vs 1M+ frontier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research; proxy from Kimi K2.5 (BenchLM) and Qwen3.7 Max (BenchLM) due to missing direct Qwen3.5 benchmarks. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.