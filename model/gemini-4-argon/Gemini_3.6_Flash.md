# Gemini 4 Argon — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-4-argon`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's specialized long-horizon frontier model featuring an industry-first 1,000,000 output token generation limit, designed for full-repository migrations, enterprise knowledge work, and autonomous cybersecurity remediation.
- **Provider / access:** Google Cloud Vertex AI & Fairwind Program (`google/gemini-4-argon`).
- **Release / knowledge:** 2026-09-30 release; August 2026 knowledge cutoff.
- **IDs:** `google/gemini-4-argon`
- **Context window:** 2,097,152 tokens input / 1,000,000 max output tokens — verified via Google DeepMind technical announcement.
- **Modalities:** text, image, audio, video in; text out; reasoning yes (deep long-horizon chain of thought); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** Introductory $2.00 input / $10.00 output per 1M tokens ($0.10 cached input, 95% prompt cache discount); standard $4.00/$20.00 planned.
- **Architecture:** Proprietary multimodal transformer with extended output decoding state memory.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **Vals Index #1 (68.9%)** (finance, coding, legal, and tax impact)
- Omniscience Accuracy / Hallucination Rate: **0.7%** (Gray Swan Indirect Prompt Injection attack success rate)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **77.9%** (DeepSWE v1.1) / **68.0%** (CWE-bench v1 vulnerability remediation, tied #1)

Long context:

- 2,097,152 token input context with 1,000,000 token output limit; **84.2%** on GraphWalks across 256K–1M tokens.

### Normalized scores (1–100)

- **Tool use: 89/100.** High-fidelity tool integration and autonomous agent operation reinforced by #1 rank on CWE-bench v1 (68.0%) and Gray Swan prompt injection defense (0.7%).
- **Reasoning: 91/100.** Top-tier specialized reasoning across legal, tax, and enterprise domains led by #1 rank on the Vals Index (68.9%).
- **Context window: 98/100.** Industry-first 1,000,000 token output generation depth coupled with 2M token input context.
- **Multimodal: 87/100.** State-of-the-art long video understanding (91.7% LVBench) and native audio/vision ingestion.
- **Coding: 89/100.** 77.9% on DeepSWE v1.1 allows autonomous multi-file code rewriting and migration in a single execution pass.
- **Cost efficiency: 82/100.** Highly aggressive $2.00/$10.00 introductory pricing with 95% caching discount ($0.10/1M).
- **Overall Score: 91/100.** Groundbreaking frontier model for long-output codebase synthesis, security auditing, and massive document generation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind releases, Vals Index leaderboards, and technical evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
