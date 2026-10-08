# Qwen 3.8 Flash — findings by Claude Opus 4.6

- Source: Alibaba/Qwen 3.8 Flash (`qwen-3.8-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's high-throughput, cost-efficient MoE model based on a hybrid Gated DeltaNet + Qwen Sparse Attention architecture. Serves as an architectural preview for the Qwen 4 series, optimized for agentic coding and long-context workflows.
- **Provider / access:** Alibaba Cloud Model Studio API (`qwen-3.8-flash`), OpenRouter, various integrated providers. Chat Completions API.
- **Release / knowledge:** 2026-08-26 (Flash-Next open weights); production Flash API shortly after. Knowledge cutoff not publicly specified.
- **IDs:** `alibaba/qwen-3.8-flash`
- **Context window:** 262,144 tokens native; extensible up to 1,000,000 tokens via YaRN — verified via Alibaba documentation.
- **Modalities:** Text + image + video in; text out. Reasoning mode supported. Tool/function calls supported. JSON mode supported. No native audio input.
- **Pricing (as of 2026-10-08):** $0.16 / $0.47 per 1M tokens (input / output). Highly cost-efficient.
- **Architecture:** Mixture-of-Experts (MoE); 125B total parameters, 6B active per token, plus 51B n-gram embedding table. Hybrid Gated DeltaNet + QSA. Open-weight variant (Flash-Next) available.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **~82.7%** (source: community evaluations)
- Toolathlon Verified: **73.5** (source: Alibaba benchmark reports)
- CoWorkBench: **73.9** (source: Alibaba comparison data)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~91.7%** (source: community evaluations / vendor reports)
- HLE: no verified public score found for Qwen 3.8 Flash specifically
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Pro: **~62.5%** (source: Alibaba benchmark comparison)
- SWE-bench Multilingual: **~81.0%** (source: Alibaba benchmark comparison)
- LiveCodeBench: **~91.9%** (source: vendor evaluations)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 262K native context window, extensible to 1M with YaRN. No specific MRCR / RULER / GraphWalks retrieval scores found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench ~82.7% and Toolathlon 73.5 demonstrate strong agentic capabilities for a flash-tier model. CoWorkBench 73.9 reinforces tool orchestration strength. Capped by limited coverage on broader tool-use benchmarks (Tau-bench, GDPval).
- **Reasoning: 84/100.** GPQA Diamond ~91.7% shows strong academic reasoning. Capped by absence of HLE and other reasoning diversity benchmarks; positioned as efficiency-first rather than reasoning-flagship.
- **Context window: 88/100.** 262K native context is substantial; 1M extensible via YaRN is impressive but not natively verified at that length. Capped by lack of published retrieval accuracy at extended lengths.
- **Multimodal: 72/100.** Supports text, image, and video input — stronger multimodal coverage than many flash-tier models. No audio input. Text-only output. Capped by absence of output modalities beyond text.
- **Coding: 87/100.** LiveCodeBench ~91.9% is excellent; SWE-bench Pro ~62.5% is competitive for a flash-tier model; SWE-bench Multilingual ~81.0% shows breadth. Capped by SWE-bench Pro being below flagship-class models.
- **Cost efficiency: 95/100.** $0.16/$0.47 per 1M tokens is extremely cost-efficient — among the cheapest frontier-capable models available. Exceptional value proposition.
- **Overall Score: 83/100.** Mean of (85 + 84 + 88 + 72 + 87) / 5 = 83.2 → 83. A highly efficient flash-tier model that punches above its weight in coding and tool use. Best fit for cost-sensitive agentic workloads and high-throughput applications.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (Alibaba Cloud documentation, community benchmarks, vendor comparison data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
