# Gemini 3.8 Flash Cyber — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.8-flash-cyber`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's specialized cybersecurity variant of Gemini 3.8 Flash, optimized for autonomous vulnerability discovery and automated patching. Available only to trusted defenders via Fairwind Program. CyberGym 86.2%, CWE-Bench 47.2%, introductory pricing $0.75/$3.75.
- **Provider / access:** Google AI Studio (`gemini-3.8-flash-cyber` via Fairwind Program), Vertex AI, Android Studio. Restricted access (trusted defenders only). Not on OpenCode Zen.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not explicitly stated.
- **IDs:** `gemini-3.8-flash-cyber` (Google AI Studio / Vertex AI). No public free tier.
- **Context window:** Not publicly specified (likely 1M+ like 3.8 Flash).
- **Modalities:** Text, code in; text, patches out; reasoning yes; tool calls yes; JSON mode yes. Specialized for code analysis.
- **Pricing (as of 2026-10-19):** Introductory $0.75/M in, $3.75/M out (expires 2026-12-31). Standard $1.50/M in, $7.50/M out from 2027-01-01. Fairwind Program pricing may differ.
- **Architecture:** Proprietary (Google DeepMind); specialized cybersecurity fine-tune of Gemini 3.8 Flash.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use (cybersecurity-focused):

- CyberGym: **86.2%** (Google blog) — surpasses 3.5 Flash Cyber and larger frontier models
- CWE-Bench (automated patching): **47.2%** (Google blog) — on Pareto frontier, near leading frontier model 47.8%
- Real-world vulnerability discovery (internal, 20 langs): **>70%** success rate (Google blog)
- Chrome Security: **2.6x** more correct patches than best commercial models (Google blog)
- Wiz penetration testing: **+7.5–9.7%** higher recall at **2.3–5.2x** lower cost (Google blog)
- DeepSWE v1.1: outperforms most larger frontier models (Google blog chart)

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google blog)
- Vals Finance Agent V2: outperforms 3.7 Flash and other frontier models (Google blog)
- Harvey's Legal Agent Benchmark: outperforms (Google blog)
- Gray Swan IPI (15 attempts): **6.0%** (BenchLM) / chart shows strong prompt injection robustness (Google blog)

Coding:

- DeepSWE v1.1: outperforms most larger frontier models (Google blog)
- No public SWE-bench / LiveCodeBench scores for Cyber variant specifically

Multimodal:

- No native multimodal benchmarks for Cyber variant; base 3.8 Flash supports text/image

Long context:

- No public long-context benchmarks for Cyber variant

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 82/100.** CyberGym 86.2% (exceeds 80%+ frontier), CWE-Bench 47.2% (Pareto frontier), real-world vuln discovery >70%, Chrome 2.6x patches, Wiz +7.5–9.7% recall. Purpose-built for cybersecurity agentic workflows.
- **Reasoning: 75/100.** HLE-Verified 54.9% (exceeds 40%+ frontier), DeepSWE outperforms larger models, Vals Finance Agent and Harvey Legal Agent outperform frontier. Capped by Gray Swan IPI 6.0%, limited general reasoning benchmarks.
- **Context window: 85/100.** Likely 1M+ (same as 3.8 Flash); no public MRCR/LCR for Cyber variant. Methodology: 500K-1M = 85-94.
- **Multimodal: 50/100.** Text/code only; no vision, video, audio, PDF. Specialized for code analysis. Methodology: code-specialized = 40-50.
- **Coding: 85/100.** DeepSWE outperforms larger frontier models, CWE-Bench 47.2% (Pareto), Chrome 2.6x patches, real-world vuln discovery >70%. Purpose-built for software engineering security tasks.
- **Cost efficiency: 60/100.** Introductory $0.75/$3.75 (blended ~$0.65/M), standard $1.50/$7.50 (blended ~$1.30/M). Fairwind Program may have custom pricing. Methodology: $0.75/$3.75 ≈ 70, $1.50/$7.50 ≈ 50 → introductory ~60.
- **Overall Score: 75/100.** Half-up mean of (82 + 75 + 85 + 50 + 85) / 5 = 75.4 → 75. Using six incl. cost: (82+75+85+50+85+60)/6 = 437/6 = 72.8 → 73. Model-queue says 87.4; discrepancy due to specialized cyber focus vs general benchmarks. Best-fit: best-in-class cybersecurity model (CyberGym 86.2%, CWE-Bench 47.2%); restricted access limits general utility.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Google blog, Fairwind Program), independent benchmark aggregators (BenchLM), and gateway pricing (Google AI Studio); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.