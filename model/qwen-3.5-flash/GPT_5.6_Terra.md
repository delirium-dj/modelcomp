# Qwen3.5 Flash — findings by GPT-5.6 Terra

- Source: Qwen / Alibaba Cloud Model Studio
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

Qwen identifies Qwen3.5-Flash as the managed production counterpart of Qwen3.5-35B-A3B.  Its official description adds a 1M-token default context window and official built-in tools to the related 35B-A3B capability base.  It is a hosted service rather than a separately published open-weight checkpoint, so benchmark equivalence with the downloadable model should not be assumed without qualification.

## Evidence review

### Official capabilities

The Qwen 35B-A3B model card explicitly links Flash to that base model and names the 1M default context and official built-in tools.  Alibaba Cloud’s current API reference documents OpenAI-compatible Chat Completions and Responses interfaces; the latter includes built-in web search, code interpreter, and web extractor.  This supports a high tool-integration and context score for the managed offering, though the API reference is platform-wide rather than a Flash-only model card.

### Independent checks and reconciliation

AIMap’s current aggregation identifies the service as the hosted 35B-A3B variant and reports independent Epoch AI runs of 82.3% GPQA Diamond and 84.4% OTIS Mock AIME, along with LMArena Text 1396 and WebDev 1244.  Noometry’s later leaderboard snapshot reports LMArena Coding 1412 and WebDev 1244.  The coding signals are mixed: the general coding-preference score is respectable while WebDev is weak.  The score consequently credits coding competence but avoids treating it as a top-tier software-engineering model.  The related open-weight card’s vendor benchmark table is used only as contextual evidence, not as a claimed Flash measurement.

### Raw benchmarks found

| Area | Result | Evidence |
| --- | ---: | --- |
| Reasoning | 82.3% GPQA Diamond; 84.4% OTIS Mock AIME | AIMap / Epoch AI runs |
| Human preference | LMArena Text 1396; Coding 1412 | AIMap and Noometry leaderboard snapshots |
| Web development | LMArena WebDev 1244 | AIMap and Noometry leaderboard snapshots |
| Context / tools | 1M default context; official built-in tools | Qwen model card |
| Platform tools | web search, code interpreter, web extractor in Responses API | Alibaba Cloud API reference |

### Normalized scores (1–100)

- **Tool use: 82/100.** The hosted route has official integrated tools and a current Responses API with search, code execution, and extraction; published task-level tool benchmarks are limited.
- **Reasoning: 81/100.** Independent GPQA and AIME runs support a solid score, but no broad independent reasoning suite establishes a frontier rating.
- **Context window: 96/100.** The official 1M-token default window is exceptional; long-context quality evidence is less extensive than the capacity claim.
- **Multimodal: 85/100.** Qwen positions Flash as the hosted counterpart to a unified vision-language model, but public Flash-specific multimodal evaluations are sparse.
- **Coding: 75/100.** LMArena Coding is respectable, whereas the consistently weak WebDev measurement calls for a conservative practical-coding score.
- **Cost efficiency: 92/100.** A managed service derived from a 3B-active MoE and intended for production-scale use has strong expected efficiency; availability and actual pricing vary by region and route.
- **Overall Score: 84/100.** Mean = 83.8 from Tool use, Reasoning, Context window, Multimodal, and Coding; cost efficiency is excluded.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Fresh public-web research; scores are normalized 1–100 interpretations, not vendor scores.
- Reference URLs:
  - https://huggingface.co/Qwen/Qwen3.5-35B-A3B
  - https://www.alibabacloud.com/help/en/model-studio/qwen-api-reference
  - https://aimap.page/en/benchmarks/model/qwen-3-5-flash-hosted-35b-a3b/
  - https://noometry.com/models/qwen3-5-flash
