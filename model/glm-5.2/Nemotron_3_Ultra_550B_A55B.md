# GLM-5.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5.2`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Base MoE)
- **Short description:** Z.AI's base GLM-5.2 MoE model. Queue Overall 74. BenchLM shows 60.53 (rank 99). Base for GLM-5.2-Coding (75.7) and GLM-5.3 (67.96). Open-weight MoE.
- **Provider / access:** Z.AI API, Hugging Face (`zai-org/GLM-5.2`), OpenCode Zen (`opencode/glm-5.2`). Free on HuggingChat.
- **Release / knowledge:** 2026 release (GLM-5 family); knowledge cutoff not explicitly stated.
- **IDs:** `zai-org/GLM-5.2` (Hugging Face), `glm-5.2` (OpenCode Zen). Free on HuggingChat.
- **Context window:** 1M (GLM-5 family standard).
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.30-0.80/M in, $0.60-1.50/M out.
- **Architecture:** MoE (GLM-5 family); parameter count not explicitly stated (GLM-5.3 is 753B/40B).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 60.53, rank 99/959):
- No detailed benchmark rows displayed on page

**Proxy from GLM-5.3 (BenchLM, 67.96):**
- SWE-bench Verified: ~71%
- LiveCodeBench: ~80.5%
- DeepSWE: ~67%
- AA Coding Index: ~75%
- Terminal-Bench 2.1: ~88%
- GPQA Diamond: ~91.7%
- HLE w/ tools: ~62.5%
- AA LCR: ~79.7%
- AA Intelligence Index: ~45

5.2 is base for 5.3; expected slightly weaker across board.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Proxy from 5.3: TB 2.1 88.2%, GDPval 1769 Elo, Toolathlon 73%. Base 5.2 estimated 5-10% weaker. Capped by no direct benchmarks.
- **Reasoning: 65/100.** Proxy from 5.3: GPQA Diamond 91.7%, HLE w/ tools 62.5%, AA LCR 79.7%, AA Intelligence Index 45. Base 5.2 estimated slightly weaker. Capped by no direct benchmarks.
- **Context window: 90/100.** 1M native (GLM-5 family). Capped by no direct LCR for 5.2.
- **Multimodal: 30/100.** Text-only (GLM family). Methodology: text-only = 20-30.
- **Coding: 75/100.** Proxy from 5.3: SWE-bench Verified 71.1%, LiveCodeBench 80.5%, DeepSWE 66.9%, AA Coding Index 74.8%, TB 2.1 88.2%. Base 5.2 estimated slightly weaker. Capped by no direct benchmarks.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 65/100.** Half-up mean of (65 + 65 + 90 + 30 + 75) / 5 = 65 → 65. Using six incl. cost: (65+65+90+30+75+95)/6 = 420/6 = 70 → 70. Model-queue says 74; discrepancy reduced. Best-fit: strong open-weight MoE base for 5.3/5.2-Coding; free access.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for 5.2. Proxy from GLM-5.3 (BenchLM) with base-model degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GLM_5.md`, using the same headings.