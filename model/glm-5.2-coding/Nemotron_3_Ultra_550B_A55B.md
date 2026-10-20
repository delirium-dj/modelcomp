# GLM-5.2-Coding — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5.2-coding`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2-Coding (Coding-specialized variant)
- **Short description:** Z.AI's coding-specialized GLM variant. Queue Overall 75.7. BenchLM doesn't list this specific variant (shows GLM-5.2 at 60.53, GLM-5.3 at 67.96). Likely a coding-optimized fine-tune of GLM-5.2.
- **Provider / access:** Z.AI API, Hugging Face (Z.AI org), OpenCode Zen (`opencode/glm-5.2-coding`). Open-weight (GLM family).
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `glm-5.2-coding` (Z.AI API / OpenCode Zen).
- **Context window:** 1M (GLM-5 family standard).
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal. Inference providers ~$0.30-0.80/M in, $0.60-1.50/M out.
- **Architecture:** Open-weight MoE (GLM family); coding-specialized fine-tune.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks** for "GLM-5.2-Coding" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows GLM-5.2 (60.53) and GLM-5.3 (67.96).

**Proxy from GLM-5.3 (BenchLM, 67.96):**
- SWE-bench Verified: ~71% (GLM-5.3 71.1%)
- LiveCodeBench: ~80% (GLM-5.3 LiveCodeBench 80.5%)
- DeepSWE: ~67% (GLM-5.3 66.9%)
- AA Coding Index: ~75% (GLM-5.3 74.8%)
- Terminal-Bench 2.1: 88.2% (GLM-5.3)

Coding variant expected 5-10% stronger on coding, similar reasoning.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** Proxy from GLM-5.3: TB 2.1 88.2%, GDPval 1769 Elo, Toolathlon 73%. Coding variant may trade some agentic breadth for coding depth. Capped by no direct benchmarks.
- **Reasoning: 70/100.** Proxy from GLM-5.3: GPQA Diamond 91.7%, HLE w/ tools 62.5%, AA LCR 79.7%, AA Intelligence Index 45. Capped by no direct benchmarks.
- **Context window: 90/100.** 1M native (GLM-5 family). Capped by no direct LCR for coding variant.
- **Multimodal: 30/100.** Text-only (GLM family). Capped by text-only architecture.
- **Coding: 85/100.** Proxy from GLM-5.3: SWE-bench Verified 71.1%, LiveCodeBench 80.5%, DeepSWE 66.9%, AA Coding Index 74.8%, TB 2.1 88.2%. Coding-specialized variant expected 5-10% stronger. Capped by no direct benchmarks.
- **Cost efficiency: 90/100.** Open-weight, free on HuggingChat, self-host near-zero marginal. Methodology: free/open-weight ≈ 90-95.
- **Overall Score: 69/100.** Half-up mean of (70 + 70 + 90 + 30 + 85) / 5 = 69 → 69. Using six incl. cost: (70+70+90+30+85+90)/6 = 435/6 = 72.5 → 73. Model-queue says 75.7; discrepancy reduced. Best-fit: strong open-weight coding specialist inheriting GLM-5.3 strengths; direct benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for coding variant. Proxy from GLM-5.3 (BenchLM) with coding specialization assumed. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GLM_5.md`, using the same headings.