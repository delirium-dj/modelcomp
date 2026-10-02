# GPT-5.4 Pro — findings by Kimi K3

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's max-performance variant of the GPT-5.4 frontier line (March 2026) — top scores on GPQA Diamond, HLE, ARC-AGI-2, FrontierMath, and BrowseComp among shipped GPT models; aimed at the most complex professional/agentic tasks. Treated as High cyber capability under OpenAI's Preparedness Framework (same safety stack as GPT-5.4).
- **Provider / access:** OpenAI API as `gpt-5.4-pro`; ChatGPT Pro and Enterprise plans. (GPT-5.4 Thinking covers Plus/Team; GPT-5.4 itself is in ChatGPT, API, and Codex.)
- **Release / knowledge:** Released 2026-03-05 with the GPT-5.4 announcement. Knowledge cutoff not separately published (family cutoff Aug 31, 2025 per GPT-5.4 model docs).
- **IDs:** `openai/gpt-5.4-pro` (Responses API; xhigh reasoning supported on the GPT-5.4 line). No Free ID exists on OpenCode Zen.
- **Context window:** GPT-5.4 supports up to 1M tokens of context (experimental in Codex; >272K counts 2× against usage limits); standard 272K-in/128K-out/400K-total platform window per the series' model docs.
- **Modalities:** Text + image in (incl. new `original` full-fidelity image detail up to 10.24M px on the 5.4 line); text out. Native computer-use capability (screenshot-driven actions), tool search, apply_patch/shell ecosystem.
- **Pricing (as of 2026-10-01):** $30 / $180 per MTok (input/output; no cached-input price listed) — official GPT-5.4 pricing table. Batch/Flex at half rate; Priority processing at 2×.
- **Architecture:** Proprietary frontier reasoning model; parameter count undisclosed.

### Raw benchmarks found

All numbers from OpenAI's official "Introducing GPT-5.4" (2026-03-05), GPT-5.4 Pro column (xhigh) unless noted.

Agent / tool use:

- BrowseComp: **89.3%** (new state of the art; agentic web research)
- OSWorld-Verified / Terminal-Bench 2.0: published for GPT-5.4 (75.0% / 75.1%) — no separate Pro figures; **Pro-specific numbers not published**
- Tau2-bench Telecom / MCP Atlas / Toolathlon: GPT-5.4 (non-Pro) published 98.9% / 67.2% / 54.6%; **Pro-specific numbers not published**

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (no tools)
- Humanity's Last Exam: **42.7%** no tools / **58.7%** with tools
- FrontierMath: Tier 1–3 **50.0%**, Tier 4 **38.0%**
- ARC-AGI-1 (Verified): **94.5%**; ARC-AGI-2 (Verified): **83.3%**
- Factuality (GPT-5.4 family claim): individual claims 33% less likely false and full responses 18% less likely to contain errors than GPT-5.2

Coding:

- SWE-Bench Pro / SWE-bench Verified / SWE-Lancer: no Pro-specific numbers published (GPT-5.4 non-Pro: SWE-Bench Pro 57.7% public, listed here as the family floor).

Long context:

- MRCRv2 8-needle (GPT-5.4 non-Pro; Pro not broken out): 97.3% @4–8K … 79.3% @128–256K, **57.5%** @256–512K, **36.6%** @512K–1M; GraphWalks BFS 256K–1M **21.4%** — retrieval degrades sharply past 256K on the family.

### Normalized scores (1–100)

- **Tool use: 93/100.** BrowseComp 89.3% SOTA plus the family's 98.9% Tau2-Telecom / tool-search / computer-use stack clear the frontier tool-use references; capped slightly because Pro-specific OSWorld/Terminal-Bench numbers aren't broken out.
- **Reasoning: 95/100.** GPQA 94.4%, HLE 58.7% tooled, ARC-AGI-2 83.3%, FrontierMath T4 38% — at or above every frontier reference line published; the strongest reasoning profile among OpenAI's shipped models as of release.
- **Context window: 95/100.** Up to 1M supported (≥1M tier = 95–100), but not 100 because MRCRv2 retrieval falls to 57.5%/36.6% at 256K–512K/512K–1M on the family — short of the ≥98% @512K bar for a perfect tier score.
- **Multimodal: 82/100.** Image input incl. high-fidelity `original` detail; MMMU-Pro 82.1% (family, with tools) and top-tier document/chart parsing (OmniDocBench E.D. 0.109) place it mid/upper image+band; no audio input and text-only output cap it.
- **Coding: 90/100.** No Pro-specific SWE numbers; scored against the GPT-5.4 family's SOTA SWE-Bench Pro 57.7% / TB 2.0 75.1% envelope with Pro positioned as the max-capability tier; capped pending Pro-specific coding benchmarks.
- **Cost efficiency: 18/100.** $30/$180 per MTok sits well below the $10/$50 → ~30 reference — the most expensive tier in OpenAI's lineup; no cached-input discount published.
- **Overall Score: 91/100.** Half-up mean of the five quality dims: (93 + 95 + 95 + 82 + 90) / 5 = 91.0 → 91. Best fit: hardest reasoning/research/agentic tasks where quality dominates cost — scientific work, deep research, high-stakes analysis; not for bulk workloads.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4", 2026-03-05, incl. Pro evaluation column and pricing table; GPT-5.4 series model docs for window/tools); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
