# GPT-5.2 — findings by Iceman

- Source: OpenAI/GPT-5.2
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI’s GPT-5.2 is a previous-generation flagship model family (Instant/Thinking/Pro) for professional knowledge work, coding, long-context reasoning, tool use, and vision, succeeded by newer GPT-5.x/6.x models.
- **Provider / access:** OpenAI ChatGPT (paid plans rollout per announcement) and OpenAI API (`gpt-5.2`, `gpt-5.2-chat-latest`, `gpt-5.2-pro` in relevant surfaces per announcement/docs). Local metadata lists `opencode/gpt-5.2` and `noFreeId`.
- **Release / knowledge:** Introduced December 11, 2025 (OpenAI announcement). Developer docs list snapshot `gpt-5.2-2025-12-11` and knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.2`, `gpt-5.2-2025-12-11`, `gpt-5.2-chat-latest`, `gpt-5.2-pro` (per announcement/docs).
- **Context window:** 400,000 context window; 128,000 max output tokens (OpenAI developer docs). Local metadata states 400K / 128K out.
- **Modalities:** Text and image input; text output (OpenAI developer docs).
- **Pricing (as of 2026-11-10):** $1.75 / 1M input tokens, $0.175 / 1M cached input tokens, $14 / 1M output tokens for GPT-5.2 / gpt-5.2-chat-latest; GPT-5.2 Pro $21 / $168 per 1M in/out (OpenAI announcement/docs). Local metadata lists tiers for Thinking/Pro.
- **Architecture:** Proprietary OpenAI model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from OpenAI’s “Introducing GPT-5.2” announcement (including benchmark tables/appendix). “GPT-5.2 Thinking” is used unless noted; Pro/other variants cited where specified.

Agent / tool use:

- GDPval (**wins or ties**, knowledge work tasks across 44 occupations): **70.9%** (GPT-5.2 Thinking; Pro 74.1%) (OpenAI announcement)
- GDPval (ties allowed, clear wins): **49.8%** (Thinking; Pro 60.0%)
- GDPval (no ties): **61.0%** (Thinking; Pro 67.6%)
- Investment banking spreadsheet tasks (internal): **68.4%** (Thinking; Pro 71.7%)
- Tau2-bench Telecom: **98.7%** (OpenAI announcement appendix)
- Tau2-bench Retail: **82.0%**
- BrowseComp: **65.8%** (Thinking; Pro 77.9%)
- Scale MCP-Atlas: **60.6%**
- Toolathlon: **46.3%**
- SWE-Lancer, IC Diamond: **74.6%** (coding/agentic context; appendix notes exclusions)

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Thinking; Pro 93.2%)
- HLE (no tools): **34.5%** (Thinking; Pro 36.6%)
- HLE (with search, Python): **45.5%** (Thinking; Pro 50.0%)
- MMMLU: **89.6%** (Thinking)
- HMMT, Feb 2025 (no tools): **99.4%** (Thinking; Pro 100.0%)
- AIME 2025 (no tools): **100.0%** (Thinking; Pro 100.0%)
- FrontierMath Tier 1–3 (with Python): **40.3%** (Thinking)
- FrontierMath Tier 4 (with Python): **14.6%** (Thinking)
- ARC-AGI-1 (Verified): **86.2%** (Thinking; Pro 90.5%)
- ARC-AGI-2 (Verified): **52.9%** (Thinking; Pro 54.2% high)

Coding:

- SWE-Bench Pro (Public): **55.6%** (Thinking)
- SWE-bench Verified: **80.0%** (Thinking)

Vision:

- CharXiv Reasoning (no tools): **82.1%** (Thinking)
- CharXiv Reasoning (with Python): **88.7%** (Thinking)
- MMMU Pro (no tools): **79.5%** (Thinking)
- MMMU Pro (with Python): **80.4%** (Thinking)
- Video MMMU (no tools): **85.9%** (Thinking)
- ScreenSpot Pro (with Python): **86.3%** (Thinking)

Long context:

- OpenAI MRCRv2 (8 needles): 4k–8k **98.2%**, 8k–16k **89.3%**, 16k–32k **95.3%**, 32k–64k **92.0%**, 64k–128k **85.6%**, 128k–256k **77.0%** (Thinking)
- BrowseComp Long Context 128k: **92.0%**; 256k: **89.8%**
- GraphWalks BFS <128k: **94.0%**; GraphWalks parents <128k: **89.0%**

Factuality / reliability:

- ChatGPT answers without errors (with search): **93.9%** (Thinking)
- ChatGPT answers without errors (no search): **88.0%** (Thinking)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores reflect GPT-5.2 Thinking/Pro-era capability as reported.

- **Tool use: 90/100.** Strong agentic/professional tool-use and workflow results (GDPval 70.9% wins/ties, Tau2-bench Telecom 98.7%/Retail 82.0%, BrowseComp 65.8%, MCP-Atlas 60.6%, Toolathlon 46.3%) indicate high capability; capped by mixed results on some agentic benchmarks.
- **Reasoning: 92/100.** Excellent verified reasoning/science/math performance (GPQA 92.4%, AIME 100%, HMMT 99.4%, ARC-AGI-1 86.2%/ARC-AGI-2 52.9%, strong HLE/FrontierMath results) supports top-tier reasoning for its generation.
- **Context window: 88/100.** 400K context is strong but below 1M-class leaders; long-context benchmark results are solid (MRCRv2/BrowseComp Long Context/GraphWalks), though context size caps extreme-window use cases.
- **Multimodal: 90/100.** Verified text+image input and strong vision/visual reasoning results (CharXiv 88.7% w/ Python, MMMU Pro 79.5%/80.4%, Video MMMU 85.9%, ScreenSpot Pro 86.3%) indicate high multimodal capability.
- **Coding: 89/100.** Strong verified coding results (SWE-bench Verified 80.0%, SWE-Bench Pro 55.6%, SWE-Lancer IC Diamond 74.6%) support high coding performance; capped versus newer frontier specialists on some agentic coding metrics.
- **Cost efficiency: 83/100.** $1.75/$14 (cached $0.175) is competitive for capability, with Pro tier much more expensive; good value for quality but not low-cost.
- **Overall Score: 90/100.** Mean of the five non-cost dims (90, 92, 88, 90, 89) = 89.8 → 90 (half-up). Best fit for high-quality professional knowledge work, coding, long-document analysis, and tool-using workflows, especially where 400K context is sufficient.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to OpenAI announcement and developer docs; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.2 (OpenAI announcement)](https://openai.com/index/introducing-gpt-5-2/)
  - [GPT-5.2 model documentation (OpenAI developers)](https://developers.openai.com/api/docs/models/gpt-5.2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
