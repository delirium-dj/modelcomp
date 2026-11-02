# GPT-6 Luna — findings by GPT 5.6 Luna

- Source: OpenAI / GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's efficient GPT-6 model for focused, high-volume reasoning, coding, and tool-driven work. It is the Luna tier itself, not GPT-6 Sol, Astra, or a low/medium effort catalogue variant.
- **Provider / access:** OpenAI API model `gpt-6-luna`, Chat Completions with limited tool behavior, and Responses API with built-in tools; also available in ChatGPT Work/Codex.
- **Release / knowledge:** 2026 release; knowledge cutoff 2026-05-18.
- **IDs:** `openai/gpt-6-luna`; default snapshot is the same unversioned ID in current OpenAI documentation.
- **Context window:** 1,050,000 tokens; maximum input 922,000 and maximum output 128,000. Prompts over 272K incur long-context pricing multipliers.
- **Modalities:** Text and image input, text output; reasoning effort `none` through `max`, function calling, structured outputs, web/file search, code interpreter, hosted shell, computer use, and MCP through Responses.
- **Pricing (as of 2026-11-02):** $0.10 input / $0.01 cached input / $0.125 cache writes / $0.50 output per 1M tokens. Batch/Flex are 50% rates; long prompts and regional processing have documented multipliers.
- **Architecture:** Proprietary; parameter count and dense/MoE details are undisclosed.

### Raw benchmarks found

> OpenAI's direct comparison and independent BenchLM rows are retained with their effort, source, and benchmark labels. Some BenchLM rows are independent provider measurements rather than OpenAI-run evaluations.

Agent / tool use:

- DeepSWE v1.1 at max effort: **66.6%** (OpenAI).
- Artificial Analysis AutomationBench **53.2%**, GDPval-AA normalized **46.6%** / Elo **1445**, AA Terminal-Bench 4.0 **12.6%**, and AA CyberGym-E2E **77.9%** (BenchLM/Artificial Analysis).
- AA Briefcase **1336**, Hermes Bench **70.5%**, and OSWorld 2.1 Offline **48.9%** are external/provider rows; the OSWorld row is kept as an external profile value rather than attributed to OpenAI's own release table.
- BenchLM composite: **62.14/100**, rank **#46/1004**, with 44/724 benchmarks covered; partial coverage is explicitly noted.

Reasoning / knowledge:

- AA-LCR **83.3%**, CritPt **19.4%**, ARC-AGI-1 **86.67%**, ARC-AGI-2 **59.3%**, MLCR-AA **26.1%** (BenchLM/ARC Prize).
- Artificial Analysis Intelligence Index **27.8%**, HLE **38.5%**, and Omniscience accuracy / hallucination rate / index **39.6% / 79.3% / -8.3%**.
- OpenAI reports that at higher effort Luna improves substantially on factuality and matches GPT-5.6 Sol's factuality at much lower cost; that is a directional comparison, not a universal benchmark number.

Coding:

- DeepSWE v1.1: **66.6%** at max effort (OpenAI).
- AA-SciCode **54.6%**, Bug Hunt Bench **18.3 fixes**, and FrontierCode 2.0 **21.9%** (BenchLM/independent rows).

Multimodal:

- ExtractBench **91.01%**, ParseBench **64.26%**, and AA-MMMU-Pro **79.7%** (BenchLM/independent rows).
- OpenAI documents image input but text output; audio/video input/output were not verified.

Long context:

- Official window: **1.05M tokens**; AA-LCR **83.3%** is a positive proxy, but no public MRCR/RULER score at the full 1.05M window was located.

### Normalized scores (1–100)

- **Tool use: 84/100.** Responses tools, function calling, AutomationBench 53.2%, and CyberGym-E2E 77.9% support strong agent use; AA Terminal-Bench 4.0 at 12.6% and varied external rows cap reliability.
- **Reasoning: 84/100.** ARC-AGI-1 86.67% and LCR 83.3% are strong, but HLE 38.5%, Intelligence Index 27.8%, and negative Omniscience Index prevent a frontier score.
- **Context window: 91/100.** The 1.05M limit and AA-LCR 83.3% are well verified, but full-window retrieval evidence is missing.
- **Multimodal: 82/100.** Image input and strong ExtractBench/ParseBench/MMMU-Pro rows establish useful document and visual work; output is text and audio/video are unsupported or unverified.
- **Coding: 84/100.** DeepSWE 66.6%, AA-SciCode 54.6%, and FrontierCode 21.9% indicate strong but uneven coding-agent performance.
- **Cost efficiency: 99/100.** $0.10/$0.50 is exceptionally low for a reasoning-capable 1M-context tool model, even after long-context surcharges.
- **Overall Score: 85.0/100.** Mean of the five quality dimensions `(84 + 84 + 91 + 82 + 84) / 5 = 85.0`; best fit is high-volume multimodal agents where very low token price matters more than perfect performance on every autonomous harness.

## Evidence notes

- The current OpenAI docs now explicitly list image input and a broad Responses tool set; the older text-only description has not been carried forward.
- BenchLM's 62.14 composite is partial and includes independent/provider rows. It is retained as context, not used as the source-file Overall.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI GPT-6 Luna documentation and Sol/Luna release comparison, BenchLM's October 29 profile, Artificial Analysis, ARC Prize, and coding/agent benchmark rows. Effort settings, provider measurements, and benchmark versions were kept separate; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-6 Luna model documentation](https://developers.openai.com/api/docs/models/gpt-6-luna)
  - [OpenAI GPT-6 Sol and Luna announcement](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [BenchLM GPT-6 Luna profile](https://benchlm.ai/models/gpt-6-luna)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
