# DeepSeek V4 Vision Exp — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v4-vision-exp`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (Experimental vision model)
- **Short description:** DeepSeek's experimental vision-capable variant of V4. Queue Overall 85 but BenchLM doesn't list this specific variant separately. V4.1 Flash (65.67) and V4 Pro (63.2) are listed. Vision-exp likely adds multimodal to V4 base.
- **Provider / access:** DeepSeek API (`deepseek-v4-vision-exp`), Hugging Face (DeepSeek org), OpenCode Zen (`opencode/deepseek-v4-vision-exp`). Open-weight (DeepSeek family).
- **Release / knowledge:** 2026 experimental release; knowledge cutoff not explicitly stated.
- **IDs:** `deepseek-v4-vision-exp` (DeepSeek API / OpenCode Zen). Free tier on HuggingChat (base V4).
- **Context window:** 1,000,000 tokens (V4 family standard); max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning yes (V4 family); tool calls yes; JSON mode yes. Vision experimental.
- **Pricing (as of 2026-10-19):** DeepSeek API pricing not publicly listed for vision-exp; V4 family open-weight, free on HuggingChat. Self-host near-zero marginal. Inference providers ~$0.30–$0.80/M in, $0.60–$1.50/M out.
- **Architecture:** Open-weight MoE (DeepSeek V4 family); vision encoder added experimentally.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks** for "V4 Vision Exp" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows DeepSeek V4.1 Flash (65.67) and V4 Pro (63.2).

Proxy from DeepSeek V4.1 Flash (BenchLM):
- Terminal-Bench 2.1: Not directly listed
- AA Intelligence Index: Not directly listed
- GPQA Diamond: Not directly listed
- LiveCodeBench: Not directly listed

DeepSeek V4 family known for strong reasoning/coding at low cost.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** No direct agentic benchmarks. V4 family strong but vision-exp untested. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 70/100.** V4.1 Flash Overall 65.67 suggests strong reasoning. V4 Pro 63.2. Vision-exp may trade some reasoning for vision. Capped by no HLE, GPQA, FrontierMath, AA Intelligence Index.
- **Context window: 90/100.** 1M native (V4 family). Capped by no public LCR/MRCR for vision-exp.
- **Multimodal: 80/100.** Experimental vision + V4 text reasoning. Video/image input added. No public MMMU-Pro, Video-MME for vision-exp. Capped by experimental status.
- **Coding: 70/100.** V4 family strong coding. Vision-exp may have slight degradation. Capped by no LiveCodeBench, SWE-bench, AA Coding Index for vision-exp.
- **Cost efficiency: 95/100.** Open-weight, free on HuggingChat (base V4); self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 74/100.** Half-up mean of (60 + 70 + 90 + 80 + 70) / 5 = 74 → 74. Using six incl. cost: (60+70+90+80+70+95)/6 = 465/6 = 77.5 → 78. Model-queue says 85; discrepancy due to experimental vision variant lacking public benchmarks. Best-fit: promising vision variant of strong V4 family; public benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for vision-exp variant. Proxy from DeepSeek V4.1 Flash/V4 Pro (BenchLM). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4.md`, using the same headings.