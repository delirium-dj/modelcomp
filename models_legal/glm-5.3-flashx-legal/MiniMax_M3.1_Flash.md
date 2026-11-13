# GLM 5.3 FlashX Legal — findings by MiniMax M3.1 Flash

- Source: Z.ai/GLM-5.3-FlashX-Legal
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX Legal
- **Short description:** Z.ai's legal-workflow variant of GLM-5.3-Flash, exposed as `GLM-5.3-FlashX-Legal` and marketed in its beta materials as GLM-Legal. It is designed for contract review, evidence analysis, and compliance research, with native image/video input and a 1M-token context window.
- **Provider / access:** OpenRouter `z-ai/glm-5.3-flashx-legal`; Vercel AI Gateway `zai/glm-5.3-flashx-legal`; Z.ai also documents a direct `GLM-5.3-FlashX-Legal` API route. The OpenRouter and Vercel routes expose Chat Completions-style text generation.
- **Release / knowledge:** The FlashX-Legal route is listed as released on 2026-11-02 by models.dev; Z.ai introduced the underlying GLM-Legal beta in October 2026 and announced direct AutoClaw availability on 2026-11-13. No public knowledge-cutoff date was found.
- **IDs:** `z-ai/glm-5.3-flashx-legal` (OpenRouter), `zai/glm-5.3-flashx-legal` (Vercel AI Gateway), and `GLM-5.3-FlashX-Legal` in Z.ai pricing documentation. No OpenCode Zen ID was verified in this research.
- **Context window:** 1,048,576 tokens total; 131,072 maximum output. The limit is independently listed by models.dev and Vercel AI Gateway; no long-context retrieval benchmark was found.
- **Modalities:** Text, image, and video in; text out; always-on reasoning, tool calling, and structured outputs are advertised on the OpenRouter route. No audio input or non-text output is documented.
- **Pricing (as of 2026-11-13):** $0.37/M input tokens, $0.075/M cached input, and $1.25/M output tokens. The same paid pricing is listed by Z.ai, OpenRouter, and Vercel; no free tier was verified.
- **Architecture:** Proprietary served legal variant. Z.ai says it is built on GLM-5.3-Flash, but a separate public parameter/weight specification for the FlashX-Legal checkpoint was not found.

### Raw benchmarks found

Agent / tool use:

- Harvey Legal Agent Benchmark (Harvey LAB): **19.2% all-pass rate** (**Z.ai / Vals AI**; Vals reports 19.17%, rank 7/79). Z.ai says this was 12.5 percentage points above the base model.
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- LegalBench: **86.23% ±0.41** (**Vals AI**; rank 15/151)
- Legal Research Bench: **41.83% ±3.43** (**Vals AI**; rank 24/78)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,048,576-token context advertised (**models.dev / Vercel AI Gateway**); no MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Harvey LAB gives direct evidence of real multi-step legal-agent execution at 19.2% all-pass and rank 7/79, but no general Terminal-Bench, Tau, or GDPval result was published, so the score is capped below frontier agentic ranges.
- **Reasoning: 83/100.** LegalBench reaches 86.23% and Legal Research Bench 41.83%, strong legal-domain results that are capped because no general GPQA/HLE or broad intelligence-index result was found.
- **Context window: 96/100.** The verified route advertises 1,048,576 total tokens and 131,072 maximum output; the score remains just below the top tier because no retrieval-at-512K-plus benchmark was reported.
- **Multimodal: 85/100.** OpenRouter/models.dev list text, image, and video input with text output, covering visual documents and video without audio or image output.
- **Coding: 50/100.** No exact-model SWE-bench, LiveCodeBench, SciCode, or coding-index score was found; this conservative provisional value reflects the absence of verified coding evidence rather than a measured coding result.
- **Cost efficiency: 94/100.** At $0.37/M input and $1.25/M output, the model is cheaper than the roughly $0.60/$2.20 reference tier, with cached input priced at $0.075/M.
- **Overall Score: 75.8/100.** The five-quality mean is (65 + 83 + 96 + 85 + 50) / 5 = 75.8; best fit is cost-effective, long-context legal document and multimodal agent work, not code-specialist use.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public web research of Z.ai documentation and announcements, Vals AI evaluations, OpenRouter/Vercel model metadata, and models.dev registry data; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-Legal: Advancing Agentic Legal Intelligence — Z.ai/AutoClaw](https://autoclaw.z.ai/blog/model/GLM-Legal/)
  - [GLM-5.3-flashX-Legal Is Now Available in AutoClaw — Z.ai](https://autoclaw.z.ai/blog/model/GLM-5.3-flashX-Legal/)
  - [GLM Legal — Vals AI](https://www.vals.ai/models/zai_glm-legal)
  - [GLM 5.3 FlashX Legal — OpenRouter API guide](https://openrouter.ai/z-ai/glm-5.3-flashx-legal)
  - [GLM 5.3 FlashX Legal — Vercel AI Gateway](https://vercel.com/ai-gateway/models/glm-5.3-flashx-legal)
  - [Z.ai model pricing](https://docs.z.ai/guides/overview/pricing)
  - [models.dev API registry](https://models.dev/api.json)
- Future sources: add a new file next to this one using the same headings.
