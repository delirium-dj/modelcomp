# GPT-5.2 Pro — findings by MiMo 2.6 Flash

- Source: OpenAI `gpt-5.2-pro`
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-27)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-27 (Overall 75). Fresh sources this pass: **LLMBenchmark.ai model
> page** (data 2026-11-10, 9/216 boards measured, sourced from Epoch AI
> benchmarking hub, Scale SEAL leaderboards, OpenRouter and OpenAI docs) —
> BenchLM still has **no rows** for this model (0/804, "coming soon") and
> Artificial Analysis has no page (404). Changes: **Reasoning 94→95** (the
> previous note "no Pro-specific FrontierMath figure published" is resolved —
> **FrontierMath T1–3 74.0% / T4 46.0%, both xHigh** — plus first
> tool-augmented HLE row **HLE (w/ search, Python) 50.0%** clearing the 40
> ref, Epoch Capabilities Index **157.2 (#30/124)**, SimpleBench 57.4,
> Chess puzzles 60.0 (#10/81), PRBench Finance 46.3 / Legal 45.4, and the
> ARC-AGI effort ladder (xHigh 90.5 / High 85.7 / Medium 81.2); **caveat
> recorded**: the 74.0 row's version vs the launch-era 40.3 attributed to
> GPT-5.2 Thinking is unresolved — treated as a Pro xHigh run per its
> source, not compared cross-version), **Tool use 70→71** (the previous
> "GDPval … no Pro-specific figure found" gap is filled by OpenAI's own
> release numbers — **GDPval 67.6% no-ties / 60.0% ties-clear-wins / 74.1%
> wins-or-ties** — plus plain **BrowseComp 77.9%** alongside the recorded
> Long-Context variants), Overall 75→**76** (mean 75.2 → 75.6). Held:
> Context 72 (no new retrieval rows — MRCRv2 collapse profile stands),\n> Multimodal 62 (still no MMMU figure for Pro; llmbenchmark measures 0 image\n> boards), Coding 78 (llmbenchmark confirms **0 of 44 coding boards ever\n> measured** for Pro — family-tier figures remain the only evidence), Cost 22\n> (pricing re-verified 2026-11-10: **$21/$168, still no cache price listed**\n> — output price ranks 339 of 341 from cheapest; web search $0.01/request).

## Model card

- **Name:** GPT-5.2 Pro (`gpt-5.2-pro`) — the extended-reasoning tier of OpenAI's GPT-5.2 family (Instant / Thinking / Pro), positioned "for top-quality, end-to-end execution" and research-grade workloads.
- **Short description:** December 2025 flagship released 11 days after OpenAI reportedly declared "code red" over Gemini 3; Pro is the xhigh-reasoning, best-quality tier — first model ever above 90% on ARC-AGI-1 — at a deliberately extreme price meant to limit casual use.
- **Provider / access:** OpenAI API only (`gpt-5.2-pro`); ChatGPT Pro plan tier. No open weights; no third-party hosting found (llm-stats lists OpenAI as the only provider).
- **Release / knowledge:** 2025-12-11 (OpenAI "Introducing GPT-5.2", llm-stats, Introl, VentureBeat — all agree); knowledge cutoff 2025-08-31 (typingmind/Introl; updated from Sep 2024).
- **IDs:** `gpt-5.2-pro` (OpenAI API). Family siblings: `gpt-5.2` / `gpt-5.2-chat-latest` ($1.75/$14) and legacy `gpt-5-pro` ($15/$120).
- **Context window:** 400,000 input / 128,000 max output (llm-stats, OpenRouter, Requesty, VentureBeat — all agree).
- **Modalities:** text + image in, text out; xhigh reasoning tier; tool calling, structured output (typingmind, Requesty). One launch-day video speculated text+image output for the family but noted no details — unconfirmed, not counted.
- **Pricing (as of 2026-10-27; re-verified 2026-11-10):** **$21.00 in / $168.00 out** per 1M, **no cache discount** for Pro — still no cache-read/cache-write price listed (OpenAI's own pricing table; VentureBeat; llm-stats; OpenRouter; LLMBenchmark 2026-11-10 — output price ranks 339 of 341 priced models from cheapest). 12× the Thinking tier ($1.75/$14); web search $0.01/request. **Conflict:** llm-stats' FAQ text also quotes "$1.75 in / $14 out" for GPT-5.2 Pro — an internal page error; OpenAI's first-party table ($21/$168) used.
- **Architecture:** proprietary — weights private; no parameter count disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (family, Thinking tier): **54.0%** vs Claude Opus 4.5 59.3 — **no Pro-specific figure published** (rdworld's comparison table shows "—" for Pro; llmbenchmark 2026-11-10 re-confirms TB2.0/TB2.1/TB4 never measured for Pro)
- SWE-Bench Pro: **55.6%** — **conflict:** Introl attributes this to GPT-5.2 Pro ("55.6 on SWE-Bench Pro... 93.2 GPQA"), while patmcguinness/rdworld attribute 55.6–56 to GPT-5.2 Thinking; variant attribution unresolved, both reported
- BrowseComp Long Context: **90.0%** (128k), **89.5%** (256k) for Pro (vs Thinking 92.0 / 89.8) (OpenAI launch table)
- **BrowseComp (plain): 77.9%** (OpenAI release-day announcement, via LLMBenchmark 2026-11-10 — **new**)
- **GDPval: 67.6% (no ties) / 60.0% (ties allowed, clear wins) / 74.1% (wins or ties)** — OpenAI's own release-day figures, via LLMBenchmark 2026-11-10 (**new — the "no GDPval figure" gap is filled**, maker-reported)
- Toolathlon / OSWorld / Tau-bench / BFCL / MCP Atlas: no Pro-specific figure found (llmbenchmark: agentic category 0/44 boards measured)

Reasoning / knowledge:

- ARC-AGI-1: **90.5%** pass@2 (xhigh) — **first model above 90%**, ~$11.65/task; beat Gemini 3 Deep Think Preview (87.5 @ ~$44.26) and Claude Opus 4.5 (80.0 @ $1.47) (OpenAI via deeplearning.ai, VentureBeat, Introl)
- ARC-AGI-2: **54.2%** pass@2 (high, $15.72/task) vs Thinking xhigh 52.9% ($1.90/task); vs Opus 4.5 37.6%, Gemini 3 Deep Think 45.1% (deeplearning.ai, rdworld)
- GPQA Diamond: **93.2%** (vs Thinking 92.4, GPT-5.1 Thinking 88.1, Opus 4.5 87; behind Gemini 3 Deep Think 93.8) (VentureBeat, rdworld)
- AIME 2025: **100%**; Humanity's Last Exam: **36.6%** (vs Thinking 34.5, Gemini 3 Pro 37.5) (rdworld); **HLE w/ search + Python: 50.0%** (OpenAI release-day, via LLMBenchmark 2026-11-10 — **new**, clears the 40 reference with tools)
- **FrontierMath Tier 1–3: 74.0% (xHigh) / Tier 4: 46.0% (xHigh)** — Epoch AI / Scale SEAL rows via LLMBenchmark 2026-11-10 (**new — the previous "no Pro-specific FrontierMath figure" gap is resolved**; **caveat:** the version vs the launch-era 40.3% attributed to GPT-5.2 Thinking is unresolved — recorded as a Pro xHigh run per its source, not compared across versions)
- **Epoch Capabilities Index: 157.2, #30/124**; **SimpleBench: 57.4% (#27/53)**; **Chess puzzles: 60.0% xHigh (#10/81)**; PRBench Finance **46.3%** / Legal **45.4%** (LLMBenchmark 2026-11-10 — new)
- ARC effort ladder (Epoch, new): ARC-AGI xHigh 90.5 / High **85.7** / Medium **81.2**; ARC-AGI-2 High 54.2 / Medium **38.5**
- Cost-efficiency milestone: ARC-AGI-1 at 88% cost ~$4,500/task a year earlier; Pro hit 90.5% at ~$12/task — a ~390× reduction (deeplearning.ai)

Coding:

- SWE-Bench Verified: **not published for Pro** (rdworld "—"); family Thinking tier: 80.0% (vs Opus 4.5 80.9) (Introl, patmcguinness)
- Terminal-Bench 2.0: family 54.0% (Introl); no Pro figure
- Independent confirmation (LLMBenchmark 2026-11-10): **0 of 44 coding boards** have ever measured Pro — no SWE-V, no Terminal-Bench, no Vibe Code Bench, no Coding Index anywhere; coding evidence remains family-tier only.

Long context:

- 400K window, 128K output. **OpenAI MRCRv2 (8 needles) — Pro collapses vs Thinking:** 65.3% (4k–8k), 47.8% (8k–16k), 44.0% (16k–32k), 37.8% (32k–64k), 36.0% (64k–128k), **29.6% (128k–256k)** — while Thinking scores 98.2/89.3/95.3/92.0/85.6/77.0 on the same bands (OpenAI launch table via VentureBeat). Extended reasoning appears to crowd out retrieval accuracy; BrowseComp Long Context holds up much better (90.0/89.5).

Performance / speed:

- TTFT p95 **30.0s** (llm-stats) — the slowest tracked OpenAI tier; reviewers noted OpenAI "expects not a lot of people to use it" (launch video).

### Normalized scores (1–100)

- **Tool use: 71/100.** BrowseComp Long Context 90.0/89.5 and now plain **BrowseComp 77.9** show strong agentic browsing, and the GDPval gap is filled by OpenAI's release figures (**67.6% no-ties / 74.1% wins-or-ties**) — a credible expert-work row → 71 (was 70). Still capped: every terminal/tool harness (TB2.0/TB2.1/TB4, OSWorld, τ²/τ³, BFCL, MCP Atlas, Toolathlon) remains unpublished for Pro — llmbenchmark confirms the agentic category sits at 0/44 measured boards — and the tier is positioned for single-shot research rather than tool loops.
- **Reasoning: 95/100.** The reasoning king profile is now complete where it can be: first model ever >90% ARC-AGI-1 (90.5, with the High 85.7 / Medium 81.2 ladder), ARC-AGI-2 54.2, GPQA 93.2, AIME 100, HLE 36.6 — and the previously-missing math rows are published: **FrontierMath T1–3 74.0 / T4 46.0 (xHigh)**, plus tool-augmented **HLE w/ search+Python 50.0** clearing the 40 ref, Epoch Capabilities Index 157.2 (#30/124), SimpleBench 57.4, Chess 60.0 → 95 (was 94). Held off 100 by Gemini 3 Deep Think edging GPQA (93.8), later-era HLE/index levels, and the FrontierMath version caveat vs the Thinking-attributed 40.3.
- **Context window: 72/100.** 400K/128K is a mid-high window (below the 1M tier), and MRCRv2 retrieval degrades catastrophically with reasoning on (29.6% at 128k–256k vs Thinking's 77.0) — a structural penalty that stops it matching its family sibling's context score; no new retrieval rows this pass.
- **Multimodal: 62/100.** Text + image input, text output only; still no MMMU figure for Pro specifically (llmbenchmark measures 0 image boards for it), no audio/video; typical GPT-5-era coverage but nothing that distinguishes the tier.
- **Coding: 78/100.** Family-tier numbers are strong for December 2025 (SWE-Verified 80.0, SWE-Pro 55.6, TB-2.0 54.0) but Pro publishes no coding benchmark of its own — independently confirmed this pass: **0 of 44 coding boards** have ever measured it — and by late 2026 those figures sit a full generation behind (GPT-5.5 TB-2.0 82.7, SWE-Pro 58.6).
- **Cost efficiency: 22/100.** $21/$168 with no cache discount — 12× the Thinking tier; re-verified 2026-11-10 as still the second-most-expensive output rate tracked (339/341 from cheapest); only the ARC-AGI per-task math ($11.65 for 90.5%) shows efficiency, and only on that one eval.
- **Overall Score: 76/100.** (71 + 95 + 72 + 62 + 78) / 5 = 378/5 = 75.6 → **76** — best fit: one-shot abstract-reasoning/science workloads where maximum per-question intelligence beats latency and cost (ARC-AGI hunting, FrontierMath-class math, hard GPQA-style analysis); not the pick for agentic tool loops, long-context retrieval, or anything budget-sensitive.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: LLMBenchmark.ai model page data 2026-11-10 — Epoch AI benchmarking hub, Scale SEAL leaderboards, OpenRouter, OpenAI model docs — plus re-checks: BenchLM has no rows for this model (0/804, "coming soon"), Artificial Analysis has no page (404); checked against the 2026-10-27 sources: OpenAI launch post/pricing, VentureBeat, deeplearning.ai, Introl, rdworld, patmcguinness, llm-stats). Conflicting variant attributions are reported side by side; maker-reported rows flagged. Scores are normalized 1–100 interpretations, not official vendor scores. Previous Signature 2026-10-27.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
