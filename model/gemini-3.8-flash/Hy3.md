# Gemini 3.8 Flash — findings by Hy3

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's Flash model (2026-09-02) targeting long-cycle software engineering, autonomous agents, and enterprise workflows. Internal engineers preferred it over Anthropic's Opus. A dedicated 3.8 Flash Cyber variant finds/fixes vulnerabilities.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.8-flash`), Gemini app. Generative Language API.
- **Release / knowledge:** Released 2026-09-02.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,000,000 tokens (Gemini Flash class; figure not separately re-confirmed this pass).
- **Modalities:** text, image, audio, video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** Flash-tier (low cost); exact rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Internal Jetski preference test: **preferred over Opus models** (no numeric score)
- 3.8 Flash Cyber: **>70% success** across 20-language internal vulnerability discovery (Baijiahao)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass; "clearest gains in Coding and Agent" per TMT Post

Long context:

- 1,000,000-token window (Gemini Flash class); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 87/100.** Internal preference over Opus and 70%+ vulnerability discovery imply strong agentic skill; capped by no public agentic benchmark number.
- **Reasoning: 86/100.** Frontier-tier Flash reasoning; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 90/100.** Broad native modality (text/image/audio/video).
- **Coding: 88/100.** Explicit coding/agent gains; no public SWE-bench number found to push higher.
- **Cost efficiency: 85/100.** Flash workhorse tier — strong capability per dollar.
- **Overall Score: 90/100.** Mean of the five non-cost dims (87+86+99+90+88)/5 = 90.0 → 90. Best-fit: agent/coding-focused Flash with enterprise workflow strength, gated by thin public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Firebase/Vertex docs, TMT Post, Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini 3.8 Flash — Baidu Baike](https://baike.baidu.com/item/Gemini%203.8%20Flash/68788174)
  - [Vertex AI supported models (Firebase)](https://firebase.google.cn/docs/vertex-ai/models)
  - [Gemini 3.8 Flash launch (TMT Post)](https://www.tmtpost.com/8126452.html)
