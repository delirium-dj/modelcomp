# GPT-5.2 Pro — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.2-pro`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's previous "pro" tier for complex professional work — a max-effort reasoning model on the Responses API only, now superseded by GPT-5.5 Pro; exceptional on math/abstraction and knowledge work, with no published agentic-coding numbers.
- **Provider / access:** OpenAI API (`https://platform.openai.com`), **Responses API only** — Chat Completions, Batch, Realtime, Fine-tuning and every other endpoint are explicitly not supported. Not listed in the OpenCode Console/Zen catalog (which carries `gpt-5.2` and `gpt-5.4-pro`/`gpt-5.5-pro` but no `gpt-5.2-pro`), so there is no Zen route and no free lane.
- **Release / knowledge:** released 2025-12-11 (default snapshot `gpt-5.2-pro-2025-12-11`). **Knowledge cutoff Aug 31, 2025** — roughly 14 months stale as of this report, which matters for any current-events work.
- **IDs:** `gpt-5.2-pro` (alias), `gpt-5.2-pro-2025-12-11` (pinned snapshot). No Free ID exists on Zen.
- **Context window:** 400,000 tokens total / 128,000 max output.
- **Modalities:** text and image in; text out. Reasoning model with reasoning-token support; `reasoning.effort` accepts medium / high / xhigh. Function calling, `file_search`, `mcp`, `web_search`, `image_generation`, streaming. Note: models.dev records **structured output = No** and OpenAI's own feature list omits JSON/structured mode for this model — confirm before relying on strict-schema output.
- **Pricing (as of 2026-10-24):** **$21.00 per 1M input / $168.00 per 1M output**, no cache discount published (OpenAI docs). A second, lower figure appears on models.dev ($19.09 / $152.73 per 1M) — a gateway-level rate, not OpenAI's list price; both are recorded below and neither is silently preferred.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

All figures are from OpenAI's GPT-5.2 launch post appendix (`https://openai.com/index/introducing-gpt-5-2/`, "Detailed benchmarks"), measured at maximum reasoning effort unless stated. No independent benchmarker publishes Pro-specific scores — Artificial Analysis has no GPT-5.2 Pro page at all (it evaluates only GPT-5.2 Thinking/Xhigh), and vals.ai has no model page.

Reasoning / knowledge:

- GPQA Diamond (no tools): **93.2%** (OpenAI launch post, max effort; the "Thinking" comparison entry is 92.4%)
- Humanity's Last Exam, no tools: **36.6%** (OpenAI launch post)
- Humanity's Last Exam with search + Python: **50.0%** (OpenAI launch post)
- AIME 2025 (no tools): **100.0%** (OpenAI launch post)
- HMMT February 2025 (no tools): **100.0%** (OpenAI launch post)
- ARC-AGI-1 (Verified): **90.5%** (OpenAI launch post — OpenAI claims it is the first model above 90%)
- ARC-AGI-2 (Verified): **54.2%** (OpenAI launch post)
- BrowseComp: **77.9%** (OpenAI launch post)
- Artificial Analysis Intelligence Index: **no verified public score found** for the Pro tier. AA's page for the non-Pro GPT-5.2 (Xhigh) reports an estimated Index of 30, 75.5 t/s and an 84.91 s TTFT — those are a *different, non-Pro* variant and are deliberately not transferred to this folder.
- CritPt / LCR / MLCR / AA-Omniscience: no verified public score found.

Agent / tool use:

- GDPval (wins or ties): **74.1%** (OpenAI launch post)
- GDPval (clear wins only): **60.0%** (OpenAI launch post)
- GDPval (excluding ties): **67.6%** (OpenAI launch post)
- Investment-banking spreadsheet tasks (OpenAI internal): **71.7%** (OpenAI launch post — vendor-internal, provisional only)
- BrowseComp (browsing-agent task): **77.9%** (listed under reasoning above; also the strongest agentic-tooling signal published)
- Terminal-Bench (any version): **no verified public score found**. OpenAI's own appendix leaves Terminal-Bench blank for Pro.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.
- GDPval-AA Elo / AutomationBench-AA / AA-Briefcase Elo / Coding Agents Index: no verified public score found.

Coding:

- SWE-bench Verified: **not reported** — OpenAI's appendix prints "-" for Pro on this benchmark.
- SWE-Bench Pro: **not reported** — likewise "-".
- DeepSWE: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- Closest published proxies (both math/algorithmic, not repo-scale software engineering): AIME 2025 **100.0%** and HMMT Feb 2025 **100.0%** (OpenAI launch post). These are used only as provisional proxies and are marked as such below — no coding score is asserted from them.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found. The 400K window and 128K max output are documented by OpenAI and models.dev, but no retrieval-durability figure at a stated length was published.

### Conflicts recorded (not silently resolved)

1. **ARC-AGI-2 effort level:** OpenAI's body text says the Pro result of 54.2% comes at **xhigh** effort, while the benchmark table's own cell labels that same 54.2% as "**high**". The figure is used but the effort level is internally inconsistent in the source.
2. **Pricing:** OpenAI's list price $21/$168 per 1M vs models.dev's $19.09/$152.73 per 1M. The OpenCode Zen catalog lists no `gpt-5.2-pro` route at all, so the models.dev figure is a third-party gateway rate. Both recorded; the OpenAI list price is used for cost scoring because that is what a direct API consumer pays.
3. **BenchLM self-conflict:** its GPT-5.2 Pro page reports "coming soon / 0 of 706 benchmarks, unranked" while its sibling GPT-5.2 list page shows 66.63 for Pro — an unresolved contradiction in that source, so no BenchLM figure is used.
4. **AA ARC-AGI-1** reports 86.17% for the non-Pro GPT-5.2 (XHigh) against OpenAI's 90.5% for Pro — different variants measured by different parties, not a direct contradiction, but a reminder that every OpenAI figure here is vendor-reported.

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 77.9% and GDPval 74.1% wins-or-ties (60.0% clear wins) are genuinely strong agentic/knowledge-work results, and ARC-AGI-1 at 90.5% shows real abstraction strength. Capped below 85 because the two benchmarks this project weights most heavily for tool use — Terminal-Bench and Tau3 — have no published Pro number at all (OpenAI's own appendix prints "-"), which per the methodology is an N/A-with-penalty, not a neutral omission.
- **Reasoning: 86/100.** GPQA Diamond 93.2% clears the 90%+ frontier reference, AIME 2025 and HMMT Feb 2025 are both 100%, and ARC-AGI-2 at 54.2% is a frontier abstract-reasoning result. Held just under 90 by HLE-without-tools at 36.6%, below the 40% frontier reference, by the tool-assisted HLE split (50.0%) that shows how much scaffolding that gap, and by the absence of any independent Intelligence Index number for this tier.
- **Context window: 80/100.** 400,000-token window with 128,000 max output lands squarely in the methodology's 200K–500K band (200K = 70). No MRCR/RULER retrieval figure was published, so durability at depth is unverified and the score is not pushed toward the top of the band.
- **Multimodal: 65/100.** Text and image input with text-only output, confirmed by both the OpenAI docs page and models.dev. That is the methodology's "+image in" band (60–70); there is no video, audio or PDF input and no non-text output to lift it higher.
- **Coding: 80/100.** **Provisional — no direct coding benchmark exists for this model.** SWE-bench Verified and SWE-Bench Pro are both explicitly unreported by OpenAI, and Terminal-Bench, DeepSWE, LiveCodeBench and SciCode have no Pro figure anywhere. The score is derived from the closest available proxies (AIME 100%, HMMT 100%, ARC-AGI-2 54.2%) and is capped rather than pushed, because perfect competition-math scores do not transfer linearly to repo-scale software engineering. Treat this as the least-reliable dimension in this file.
- **Cost efficiency: 28/100.** $21.00/$168.00 per 1M with no published cache discount — materially worse than the methodology's $10/$50 ≈ 30 reference, and roughly 40x the per-task cost of the frontier value picks (GPT-6.1 Sol at $0.72/task, DeepSeek V4.1 Flash 1017 at $0.26/task). No free or discounted lane was found for this ID.
- **Overall Score: 78/100.** Mean of the five quality dims (78 + 86 + 80 + 65 + 80 = 389 ÷ 5 = 77.8 → 78). Best fit: a one-off, budget-insensitive reasoning specialist — competition math, abstract reasoning, and structured professional analysis where $21/$168 per task is irrelevant. Poor fit for agentic coding, for anything needing current knowledge (Aug 2025 cutoff), or for any latency-sensitive loop (Responses-API-only, no Batch, no Chat Completions).

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (OpenAI's official model-docs page, OpenAI's GPT-5.2 launch post benchmark appendix, and models.dev), supplemented by checked-and-empty searches on Artificial Analysis, vals.ai and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — ARC-AGI-2 effort level (xhigh vs high in OpenAI's own post), list price ($21/$168 vs $19.09/$152.73), and BenchLM's self-contradictory page. Every OpenAI figure here is vendor-reported; no independent benchmarker publishes Pro-specific scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
