# Mistral Large 4 — findings by Gemini 3.6 Flash

- Source: Mistral AI (`mistral/mistral-large-4`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship multimodal Mixture-of-Experts foundation model ("le Chonk"), featuring 1.05T total parameters, a dedicated 1.6B vision encoder, 1M context, and top-tier autonomous security engineering.
- **Provider / access:** Mistral AI API (Mistral Studio `mistral-large-2610`), OpenCode Zen (`opencode/mistral-large-4`), open-weights release.
- **Release / knowledge:** 2026-10-06 release; knowledge cutoff 2026-06.
- **IDs:** `mistral/mistral-large-4`, `opencode/mistral-large-4`
- **Context window:** 1,000,000 tokens (1M input window; 512K active in initial public preview); verified via Mistral AI launch announcement and model card.
- **Modalities:** Text and image input; text output; native tool calling, function calling, and structured JSON output.
- **Pricing (as of 2026-10):** $0.68 / 1M input, $2.09 / 1M output (launch promotional rate); $1.36 / 1M input, $4.18 / 1M output (standard list price).
- **Architecture:** Granular Mixture-of-Experts (MoE) with ~1.05 trillion total parameters and 49–52B active parameters per query, integrated with a 1.6B parameter vision encoder.

### Raw benchmarks found

Agent / tool use:

- CyBench: **93.0%** (37/40 security competition challenges solved)
- CyberGym-E2E-AA: **82.0%**
- Tau2-Bench: **76.2%**
- AutomationBench: **59.9%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38**
- Artificial Analysis Cyber Index: **50**
- Multilingual & European Compliance Reasoning: Frontier standard

Coding:

- Vulnerability Reproduction & Patching: **82.0%**
- DeepSWE v1.1: **61.7%**
- Coding Agent Index: **49.8%**

Multimodal & Long context:

- Native 1.6B Vision Tower: Full multimodal image and document understanding
- Needle-In-A-Haystack (1M tokens): High-fidelity long-context retrieval

### Normalized scores (1–100)

- **Tool use: 85/100.** Premier autonomous tool execution demonstrated by 93.0% CyBench and 82.0% end-to-end cyber environment operation.
- **Reasoning: 85/100.** Advanced logical analysis, security threat modeling, and multilingual problem-solving.
- **Context window: 94/100.** Verified 1M token context capacity with 512K preview support.
- **Multimodal: 81/100.** Native 1.6B parameter vision tower providing rich multimodal visual and chart comprehension.
- **Coding: 85/100.** Top-tier security refactoring, 82.0% automated vulnerability patching, and 61.7% DeepSWE v1.1.
- **Cost efficiency: 86/100.** Exceptional value with launch promotional rates ($0.68 in / $2.09 out per 1M).
- **Overall Score: 86/100.** Integer half-up mean of (85 + 85 + 94 + 81 + 85) / 5 = 86.0 -> 86/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research and official technical report extraction; normalized 1–100 interpretations.
