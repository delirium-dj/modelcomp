# GPT-5.2 Pro — findings by MiMo 2.6 Flash

- Source: OpenAI `gpt-5.2-pro`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro (`gpt-5.2-pro`) — the extended-reasoning tier of OpenAI's GPT-5.2 family (Instant / Thinking / Pro), positioned "for top-quality, end-to-end execution" and research-grade workloads.
- **Short description:** December 2025 flagship released 11 days after OpenAI reportedly declared "code red" over Gemini 3; Pro is the xhigh-reasoning, best-quality tier — first model ever above 90% on ARC-AGI-1 — at a deliberately extreme price meant to limit casual use.
- **Provider / access:** OpenAI API only (`gpt-5.2-pro`); ChatGPT Pro plan tier. No open weights; no third-party hosting found (llm-stats lists OpenAI as the only provider).
- **Release / knowledge:** 2025-12-11 (OpenAI "Introducing GPT-5.2", llm-stats, Introl, VentureBeat — all agree); knowledge cutoff 2025-08-31 (typingmind/Introl; updated from Sep 2024).
- **IDs:** `gpt-5.2-pro` (OpenAI API). Family siblings: `gpt-5.2` / `gpt-5.2-chat-latest` ($1.75/$14) and legacy `gpt-5-pro` ($15/$120).
- **Context window:** 400,000 input / 128,000 max output (llm-stats, OpenRouter, Requesty, VentureBeat — all agree).
- **Modalities:** text + image in, text out; xhigh reasoning tier; tool calling, structured output (typingmind, Requesty). One launch-day video speculated text+image output for the family but noted no details — unconfirmed, not counted.
- **Pricing (as of 2026-10-27):** **$21.00 in / $168.00 out** per 1M, **no cache discount** for Pro (OpenAI's own pricing table; VentureBeat; llm-stats; OpenRouter — all agree). 12× the Thinking tier ($1.75/$14). **Conflict:** llm-stats' FAQ text also quotes "$1.75 in / $14 out" for GPT-5.2 Pro — an internal page error; OpenAI's first-party table ($21/$168) used.
- **Architecture:** proprietary — weights private; no parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (family, Thinking tier): **54.0%** vs Claude Opus 4.5 59.3 — **no Pro-specific figure published** (rdworld's comparison table shows "—" for Pro)
- SWE-Bench Pro: **55.6%** — **conflict:** Introl attributes this to GPT-5.2 Pro ("55.6 on SWE-Bench Pro... 93.2 GPQA"), while patmcguinness/rdworld attribute 55.6–56 to GPT-5.2 Thinking; variant attribution unresolved, both reported
- BrowseComp Long Context: **90.0%** (128k), **89.5%** (256k) for Pro (vs Thinking 92.0 / 89.8) (OpenAI launch table)
- Toolathlon / OSWorld / GDPval / Tau-bench: no Pro-specific figure found

Reasoning / knowledge:

- ARC-AGI-1: **90.5%** pass@2 (xhigh) — **first model above 90%**, ~$11.65/task; beat Gemini 3 Deep Think Preview (87.5 @ ~$44.26) and Claude Opus 4.5 (80.0 @ $1.47) (OpenAI via deeplearning.ai, VentureBeat, Introl)
- ARC-AGI-2: **54.2%** pass@2 (high, $15.72/task) vs Thinking xhigh 52.9% ($1.90/task); vs Opus 4.5 37.6%, Gemini 3 Deep Think 45.1% (deeplearning.ai, rdworld)
- GPQA Diamond: **93.2%** (vs Thinking 92.4, GPT-5.1 Thinking 88.1, Opus 4.5 87; behind Gemini 3 Deep Think 93.8) (VentureBeat, rdworld)
- AIME 2025: **100%**; Humanity's Last Exam: **36.6%** (vs Thinking 34.5, Gemini 3 Pro 37.5) (rdworld)
- FrontierMath Tier 1–3: 40.3% appears in launch coverage but is attributed to GPT-5.2 Thinking by deeplearning.ai/rdworld — **no Pro-specific FrontierMath figure published**
- Cost-efficiency milestone: ARC-AGI-1 at 88% cost ~$4,500/task a year earlier; Pro hit 90.5% at ~$12/task — a ~390× reduction (deeplearning.ai)

Coding:

- SWE-Bench Verified: **not published for Pro** (rdworld "—"); family Thinking tier: 80.0% (vs Opus 4.5 80.9) (Introl, patmcguinness)
- Terminal-Bench 2.0: family 54.0% (Introl); no Pro figure

Long context:

- 400K window, 128K output. **OpenAI MRCRv2 (8 needles) — Pro collapses vs Thinking:** 65.3% (4k–8k), 47.8% (8k–16k), 44.0% (16k–32k), 37.8% (32k–64k), 36.0% (64k–128k), **29.6% (128k–256k)** — while Thinking scores 98.2/89.3/95.3/92.0/85.6/77.0 on the same bands (OpenAI launch table via VentureBeat). Extended reasoning appears to crowd out retrieval accuracy; BrowseComp Long Context holds up much better (90.0/89.5).

Performance / speed:

- TTFT p95 **30.0s** (llm-stats) — the slowest tracked OpenAI tier; reviewers noted OpenAI "expects not a lot of people to use it" (launch video).

### Normalized scores (1–100)

- **Tool use: 70/100.** BrowseComp Long Context 90.0 shows strong agentic browsing, and SWE-Bench Pro 55.6 (family attribution disputed) is respectable — but every terminal/tool benchmark for Pro is unpublished (family Thinking: TB-2.0 54.0, below Opus 4.5), and the tier is positioned for single-shot research rather than tool loops; capped by missing Pro-specific evidence.
- **Reasoning: 94/100.** At launch the reasoning king: first model ever >90% ARC-AGI-1 (90.5), ARC-AGI-2 54.2, GPQA 93.2, AIME 100, HLE 36.6 — each at or above every December-2025 rival; held below 95 only because Gemini 3 Deep Think edged GPQA (93.8) and HLE-tiers were later surpassed.
- **Context window: 72/100.** 400K/128K is a mid-high window (below the 1M tier), and MRCRv2 retrieval degrades catastrophically with reasoning on (29.6% at 128k–256k vs Thinking's 77.0) — a structural penalty that stops it matching its family sibling's context score.
- **Multimodal: 62/100.** Text + image input, text output only; no MMMU figure found for Pro specifically, no audio/video; typical GPT-5-era coverage but nothing that distinguishes the tier.
- **Coding: 78/100.** Family-tier numbers are strong for December 2025 (SWE-Verified 80.0, SWE-Pro 55.6, TB-2.0 54.0) but Pro publishes no coding benchmark of its own, and by late 2026 those figures sit a full generation behind (GPT-5.5 TB-2.0 82.7, SWE-Pro 58.6).
- **Cost efficiency: 22/100.** $21/$168 with no cache discount — 12× the Thinking tier and among the highest API rates of any non-specialty model; only the ARC-AGI per-task math ($11.65 for 90.5%) shows efficiency, and only on that one eval.
- **Overall Score: 75/100.** (70 + 94 + 72 + 62 + 78) / 5 = 75.2 → 75 — best fit: one-shot abstract-reasoning/science workloads where maximum per-question intelligence beats latency and cost (ARC-AGI hunting, hard GPQA-style analysis); not the pick for agentic tool loops, long-context retrieval, or anything budget-sensitive.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official OpenAI sources first (Introducing GPT-5.2 launch post and pricing table), then independent benchmark/review sources (VentureBeat, deeplearning.ai The Batch, Introl, rdworld, patmcguinness.substack, llm-stats, OpenRouter, Requesty, typingmind); conflicting variant attributions are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
