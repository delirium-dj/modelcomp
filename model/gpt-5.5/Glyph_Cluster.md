# GPT-5.5 — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship GPT-5.5 reasoning model for complex coding and professional work, optimized for agentic workflows, tool use, and long-context tasks.
- **Provider / access:** OpenAI API (`gpt-5.5`, Chat Completions and Responses APIs; Batch supported) and cloud providers (e.g. Amazon Bedrock `openai.gpt-5.5`). Available in ChatGPT/Codex per announcement.
- **Release / knowledge:** Snapshot/default version `gpt-5.5-2026-04-23` (April 23, 2026). Knowledge cutoff: December 1, 2025 (OpenAI docs).
- **IDs:** `gpt-5.5` (API model ID; default snapshot `gpt-5.5-2026-04-23`).
- **Context window:** 1,050,000 tokens input context; 128,000 max output tokens (OpenAI model docs). Codex rollout noted with 400K context window in announcement; API/docs specify 1.05M.
- **Modalities:** Text and image input; text output. Reasoning token support (`reasoning.effort`: none, low, medium default, high, xhigh).
- **Pricing (as of 2026-11-10):** $5.00 / 1M input tokens, $0.50 / 1M cached input, $30.00 / 1M output tokens (OpenAI docs). Prompts >272K input tokens priced at 2x input and 1.5x output for the full session (standard/batch/flex); regional processing may add 10% uplift.
- **Architecture:** Proprietary (parameter count and internal architecture not publicly disclosed).

### Raw benchmarks found

> Sources: OpenAI "Introducing GPT-5.5" announcement/evaluation tables and OpenAI API model documentation.

Agent / tool use:

- GDPval (wins or ties): **84.9%** (OpenAI announcement).
- OSWorld-Verified: **78.7%** (OpenAI announcement).
- BrowseComp: **84.4%** (OpenAI announcement).
- MCP Atlas: **75.3%** (OpenAI announcement; Scale AI April 2026 update noted).
- Toolathlon: **55.6%** (OpenAI announcement).
- Tau2-bench Telecom (original prompts): **98.0%** (OpenAI announcement).
- FinanceAgent v1.1: **60.0%** (OpenAI announcement).
- Investment Banking Modeling Tasks (Internal): **88.5%** (OpenAI announcement).
- OfficeQA Pro: **54.1%** (OpenAI announcement).

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI announcement).
- Humanity's Last Exam (no tools): **41.4%** (OpenAI announcement).
- Humanity's Last Exam (with tools): **52.2%** (OpenAI announcement).
- FrontierMath Tier 1–3: **51.7%** (OpenAI announcement).
- FrontierMath Tier 4: **35.4%** (OpenAI announcement).
- GeneBench: **25.0%** (OpenAI announcement).
- BixBench: **80.5%** (OpenAI announcement).
- ARC-AGI-1 (Verified): **95.0%** (OpenAI announcement).
- ARC-AGI-2 (Verified): **85.0%** (OpenAI announcement).

Coding:

- Terminal-Bench 2.0: **82.7%** (OpenAI announcement).
- Expert-SWE (Internal): **73.1%** (OpenAI announcement).
- SWE-Bench Pro (Public): **58.6%** (OpenAI announcement).
- CyberGym: **81.8%** (OpenAI announcement).
- Capture-the-Flags challenge tasks (Internal): **88.1%** (OpenAI announcement).

Long context:

- 1,050,000-token context window and 128k max output (OpenAI docs).
- Graphwalks BFS 256k / 1M F1: **73.7% / 45.4%** (OpenAI announcement).
- Graphwalks parents 256k / 1M F1: **90.1% / 58.5%** (OpenAI announcement).
- OpenAI MRCR v2 8-needle (selected ranges): **98.1%** (4K-8K), **96.5%** (16K-32K), **87.5%** (128K-256K), **81.5%** (256K-512K), **74.0%** (512K-1M) (OpenAI announcement).

Multimodal:

- MMMU Pro (no tools): **81.2%** (OpenAI announcement).
- MMMU Pro (with tools): **83.2%** (OpenAI announcement).
- Image input supported; text output (OpenAI docs).

### Normalized scores (1–100)

> Derived from OpenAI's verified public announcement/evaluations and API documentation. Scores are normalized interpretations, not official vendor scores. Cost excluded from Overall.

- **Tool use: 93/100.** Strong agentic/computer-use and tool-calling evidence: GDPval 84.9%, OSWorld-Verified 78.7%, BrowseComp 84.4%, MCP Atlas 75.3%, Tau2-bench Telecom 98.0%, plus rich supported tool set (web/file search, code interpreter, computer use, MCP, etc.). Capped by moderate Toolathlon (55.6%) and OfficeQA Pro (54.1%).
- **Reasoning: 93/100.** High reasoning/academic performance: GPQA 93.6%, ARC-AGI-1/2 95.0%/85.0%, strong FrontierMath (51.7%/35.4%), BixBench 80.5%, HLE 41.4%/52.2%. Capped by lower GeneBench (25.0%) and remaining difficulty on hardest expert tasks.
- **Context window: 97/100.** 1.05M-token context with strong verified long-context results up to 1M (MRCR v2 74.0% at 512K-1M; Graphwalks 1M 45.4%/58.5%). Capped by degradation at extreme lengths relative to shorter ranges.
- **Multimodal: 78/100.** Good vision-language capability with image input and strong MMMU Pro results (81.2%/83.2%). Capped by text-only output and no verified audio/video input or generative multimodal outputs.
- **Coding: 95/100.** Excellent coding/agentic software engineering results: Terminal-Bench 2.0 82.7%, Expert-SWE 73.1%, SWE-Bench Pro 58.6%, plus strong cybersecurity coding (CyberGym 81.8%, CTF 88.1%). Capped by room for improvement on hardest real-world SWE tasks.
- **Cost efficiency: 55/100.** $5/$30 per 1M tokens ($0.50 cached input) is significantly cheaper than Pro tier and reasonable for frontier capability, but still premium-priced versus low-cost models.
- **Overall Score: 91/100.** Mean of non-cost dimensions (93 + 93 + 97 + 78 + 95) / 5 = 91.2, rounded to 91. Best fit for frontier agentic coding, tool-heavy professional workflows, and long-context multimodal understanding where strong reliability and efficiency matter.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (OpenAI API model documentation, OpenAI "Introducing GPT-5.5" announcement/evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [OpenAI API docs — GPT-5.5](https://platform.openai.com/docs/models/gpt-5.5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
