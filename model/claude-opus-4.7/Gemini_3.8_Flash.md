# Claude Opus 4.7 — findings by Gemini 3.8 Flash

- Source: Anthropic/Claude Opus 4.7 (`claude-opus-4-7`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's flagship frontier model optimized for advanced software engineering, long-horizon multi-repo coding, computer use, and multi-step agentic workflows.
- **Provider / access:** Anthropic API (`claude-opus-4-7`), Amazon Bedrock, Google Cloud Vertex AI. Responses and Messages API.
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff early 2026.
- **IDs:** `anthropic/claude-opus-4-7`, `anthropic.claude-opus-4-7-v1:0` (Bedrock); no Free tier on Zen.
- **Context window:** 1,000,000 tokens (1M) input window, 128,000 tokens (128K) maximum output.
- **Modalities:** Text, high-resolution image (up to 3.75 MP, 2576 px long edge), and PDF document input; text output; native tool use, computer use, and structured JSON output.
- **Pricing (as of 2026-10-21):** $5.00 / 1M input tokens, $25.00 / 1M output tokens; prompt caching reads at $0.50 / 1M and writes at $6.25 / 1M (note: updated tokenizer yields ~30-35% higher token counts for identical text vs Opus 4.6).
- **Architecture:** Proprietary frontier dense/MoE architecture featuring configurable reasoning effort levels including the `xhigh` extended thought mode.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (Computer Use): **78.0%** (Anthropic model card / Vellum eval)
- Tool Use (MCP-Atlas): **77.3%** (Vellum / AA benchmark suite)
- Terminal-Bench 2.0 / 2.1: **69.4%** (standard Terminus-2 harness) / **80.2%** (with WOZCODE scaffold)
- Tau3-Banking / Tau2-Bench: **40.2% - 88.6%** (Tau2 customer service vs complex Tau3 banking agent benchmarks)
- GDPval-AA: **1742** (provisional frontier agentic evaluation)
- CursorBench: **>70%**

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic model card; independent verification reports ~92.0%)
- HLE (Humanity's Last Exam): **46.8%** (frontier academic multidisciplinary benchmark)
- LCR / MLCR: **84.5%** (long-context reasoning evaluation)
- CritPt: **72.1%** (complex multi-step scientific reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **92.4% / Top 5 rank** (BenchLM composite tracking)
- Omniscience Accuracy / Hallucination Rate: **89.5% / 3.8%** (low hallucination rate under agentic self-checking)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic model card / Thesys dev)
- SWE-bench Pro: **64.3%** (multi-language real-world codebases)
- LiveCodeBench: **85.1%** (vals.ai / codersera, pass@1 competitive programming)
- SciCode / AA-SciCode: **62.4%** (scientific problem solving and simulation)
- Vibe Code Bench: **68.2%** (interactive UI and web application generation)

Long context:

- MRCR v2 (1M window): **94.8%** multi-needle retrieval accuracy across full 1M context span; minor prompt adherence friction noted when complex system instructions interact with deep needles.

### Normalized scores (1–100)

- **Tool use: 90/100.** Leads frontier multi-tool orchestration with 77.3% MCP-Atlas and 78.0% OSWorld computer use; capped by 69.4% standard unassisted Terminal-Bench baseline.
- **Reasoning: 94/100.** Exceptional 94.2% GPQA Diamond and top-tier Humanity's Last Exam performance; capped by rare edge-case over-thinking on simple queries in xhigh mode.
- **Context window: 97/100.** Full native 1M context window with 128K max output; capped by slight deep-needle recall attenuation on complex multi-round transcripts.
- **Multimodal: 88/100.** High-fidelity 3.75 MP image perception and robust multi-page PDF document comprehension; capped by lack of native audio/video streaming modalities.
- **Coding: 96/100.** Frontier software engineering benchmark leader with 87.6% SWE-bench Verified and 64.3% multi-language SWE-bench Pro; capped by competitive programming LiveCodeBench trade-offs against specialized math-code reasoners.
- **Cost efficiency: 58/100.** Substantial $5/$25 per 1M pricing exacerbated by 30-35% higher token density from the new tokenizer, though offset by effective prompt caching.
- **Overall Score: 93/100.** Quality arithmetic mean of the 5 core quality dimensions ((90 + 94 + 97 + 88 + 96) / 5 = 93.0). Exceptional frontier software engineering and autonomous agentic model.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing official Anthropic releases, model card data, and independent evaluations from Vellum, BenchLM, Thesys, and Vals.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
