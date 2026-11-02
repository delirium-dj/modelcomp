# GPT-5.5 Pro — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's maximum-compute "think harder" variant of GPT-5.5 (the April 2026 "Spud" generation), built for the hardest professional and research problems — BrowseComp state of the art (90.1%), #1 on Epoch's FrontierMath v2 Tiers 1–3. A distinct, slower, much pricier variant of `gpt-5.5`; ChatGPT Pro/Business/Enterprise plus Responses-API-only access.
- **Provider / access:** OpenAI API `gpt-5.5-pro` via the Responses API (`v1/responses`) and Batch (`v1/batch`) — Chat Completions is explicitly **not** supported (official model docs, fetched 2026-11-02). Also served interactively in ChatGPT for Pro/Business/Enterprise tiers. OpenCode Zen: no free ID (paid-only access, if listed). Some requests run minutes — OpenAI recommends background mode.
- **Release / knowledge:** Released 2026-04-23 in ChatGPT (Pro/Business/Enterprise); API access from 2026-04-24 (OpenAI changelog + announcement update). Default snapshot `gpt-5.5-pro-2026-04-23`. Knowledge cutoff: 2025-12-01 (official docs).
- **IDs:** `openai/gpt-5.5-pro` (snapshot `gpt-5.5-pro-2026-04-23`); no Free ID exists on Zen.
- **Context window:** 1,050,000 total tokens / 128,000 max output — verified directly on the official model docs page (developers.openai.com/api/docs/models/gpt-5.5-pro, fetched 2026-11-02). Artificial Analysis lists ~922k usable input, consistent with the 1.05M total minus output reserve.
- **Modalities:** Text and image in; text out. Reasoning: yes (reasoning.effort supports medium / high (default) / xhigh; reasoning token support). Tool calls: yes — function calling, web_search, file_search, code_interpreter, hosted_shell, MCP, image_generation. Structured outputs / JSON mode: yes. No audio or video in or out.
- **Pricing (as of 2026-11-02):** Paid — $30 per 1M input, $180 per 1M output (official docs; unchanged since launch). **No cached-input discount** ("GPT-5.5 Pro does not offer a cached input discount"). Data-residency endpoints +10% uplift. Batch API supported. Premium tier: 6× the base GPT-5.5 price ($5/$30).
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed. GPT-5.5 family is served on NVIDIA GB200/GB300 NVL72 systems (launch post). Pro is a Responses-API "Pro mode" execution profile that applies more model work per request before returning a single final answer, trading latency for accuracy.

### Raw benchmarks found

> Vendor rows: OpenAI "Introducing GPT-5.5" (Apr 23, 2026), GPT-5.5 Pro column, xhigh-family research environment. Third-party rows: Epoch AI snapshots via LM Council (checked Aug 18, 2026), ARC Prize via BenchLM.ai, BenchmarkList. Many agentic/coding evals were never published for the Pro variant ("—" in the vendor table).

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI announcement, Apr 23 2026 — best in its comparison table, ahead of GPT-5.4 Pro 89.3% and Gemini 3.1 Pro 85.9%)
- GDPval (wins or ties): **82.3%** (OpenAI announcement; slightly below base GPT-5.5's 84.9%)
- GDPval-AA (Artificial Analysis harness, xhigh): **82.3%** (AA catalog via DataLearner — rank 1 of 15, checked 2026-11-02)
- Investment Banking Modeling Tasks (internal): **88.6%** (OpenAI announcement)
- GeneBench (multi-stage scientific analysis): **33.2%** (OpenAI announcement; base GPT-5.5 25.0%)
- Terminal-Bench 2.1/2.0: no verified public score found for Pro (— in vendor table; absent from Epoch's Aug 18 2026 top-20)
- Tau2-Bench / Tau3-Bench: no verified public score found for Pro (base GPT-5.5: 98.0% Tau2-Telecom, official)
- MCP-Atlas / Toolathlon: no verified public score found for Pro (— in vendor table; base: 75.3% / 55.6%)
- GDPval-AA Elo (AA's own live page): not displayed — AA's model page reads "No publicly available API"; the 82.3% row above comes from DataLearner's catalog of the AA-harness run

Reasoning / knowledge:

- GPQA Diamond: **93.9% ±1.6** (Epoch AI via LM Council, snapshot Aug 18 2026 — #4 of 20, behind GPT-5.4 Pro 94.6%)
- FrontierMath Tiers 1–3 (v2): **87.7% ±1.9** (Epoch v2 via LM Council, Aug 18 2026 — **#1 of 20**; vendor legacy-scale figure was 52.4%)
- FrontierMath Tier 4 (v2): **78.0% ±6.5** (Epoch v2 — #2 of 20, behind Claude Fable 5 max 87.8%; vendor legacy-scale figure was 39.6%)
- OTIS Mock AIME 2024-25: **100.0% ±0.0** (Epoch via LM Council — #1)
- HLE (no tools): **43.1%**; HLE (with tools): **57.2%** (OpenAI announcement; trails Claude Opus 4.7 46.9% no-tools and GPT-5.4 Pro 58.7% with tools)
- ARC-AGI-2 (Semi-Private, ARC Prize verified): **84.2%** (xhigh) / **84.6%** (high) (ARC Prize leaderboard via BenchLM.ai, ranks 33–34; GPT-6 Astra max leads at 95%)
- CritPt: **30.6%** (xhigh; BenchmarkList/BenchLM, imported 2026-06-10 — top-10; caveat: a Sept 2026 expert audit found errors in 21 of 56 audited CritPt challenges, so raw values understate corrected accuracy)
- IMO-ProofBench Advanced (xhigh): **88.1%** (Stanford/Epoch catalog via DataLearner — rank 1 of 24, checked 2026-11-02)
- SimpleBench: **76.9%** (simple-bench.com via LM Council, snapshot Aug 13 2026 — #4 of 52)
- Artificial Analysis Intelligence Index: no published value — AA's GPT-5.5 Pro page shows every index field as N/A with the note "No publicly available API" (fetched 2026-11-02)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for Pro (not in Epoch's Aug 18 2026 top-20; family: base GPT-5.5 xhigh 80.6% ±1.8 Epoch, 82.60% Mini-SWE-agent on Vals AI)
- SWE-Bench Pro (public): no verified public score found for Pro (— in vendor table; family: base 58.6%, Claude Opus 4.7 64.3%)
- Terminal-Bench 2.0: no verified public score found for Pro (— in vendor table; family: base 82.7% was launch SOTA)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- no MRCR / RULER / GraphWalks retrieval scores published for the Pro variant (every long-context row in the vendor table is "—"). Window itself: 1,050,000 total / 128,000 max output (official docs). Family reference (GPT-5.5 **base**, not Pro): MRCR v2 8-needle 512K–1M 74.0%, Graphwalks BFS 1M 45.4% (OpenAI announcement).

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 90.1% is the best score in OpenAI's own six-model comparison and GDPval 82.3% plus GeneBench 33.2% confirm strong agentic search/knowledge work; capped because MCP-Atlas, Toolathlon and Tau2 were never published for the Pro variant and AA lists no public API for independent agent testing.
- **Reasoning: 95/100.** #1 on Epoch FrontierMath v2 Tiers 1–3 (87.7%), #2 on Tier 4 v2 (78.0%), IMO-ProofBench Advanced 88.1% (#1 of 24), GPQA Diamond 93.9%, OTIS AIME 100% and ARC-AGI-2 84.2% semi-private form a decisive frontier-research band; capped by HLE no-tools (43.1%) trailing Claude Opus 4.7 (46.9%) and non-#1 GPQA/ARC placement.
- **Context window: 86/100.** 1,050,000 total / 128,000 max output is a top-tier 1M-class window verified on official docs; capped because not a single MRCR/GraphWalks retrieval number exists for the Pro variant at window length, so effective 512K–1M recall is unmeasured.
- **Multimodal: 68/100.** Text + image input with image_generation tooling and text-only output (no audio/video), verified on the official docs; capped by the absence of any Pro-specific vision benchmark (MMMU-Pro rows are "—").
- **Coding: 83/100.** Zero verified agentic-coding rows exist for the Pro variant itself (SWE-Bench Pro, Terminal-Bench 2.0 and Expert-SWE all "—"; absent from Epoch and Vals AI boards), so the score rests on the elite family proxy — base GPT-5.5 holds Terminal-Bench 2.0 launch SOTA (82.7%) and 80.6% Epoch SWE-bench Verified — capped for lack of same-variant evidence.
- **Cost efficiency: 15/100.** $30/$180 per 1M tokens with no cached-input discount is 6× the base GPT-5.5 and the extreme end of the market (~$67.50 blended per BenchLeader/AA, at a measured 23 tok/s output), justified only when maximum accuracy on near-unsolvable problems matters; deep third-party value data is missing since AA cannot test it ("no publicly available API").
- **Overall Score: 84/100.** Mean of the five non-cost dims (88+95+86+68+83)/5 = 84.0 — best fit for maximum-accuracy research, frontier mathematics and hard agentic browsing where budget is secondary; overkill for routine coding or cost-sensitive workloads, where the base GPT-5.5 delivers most of the capability at 1/6th the price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.5 (OpenAI, Apr 23 2026 — official benchmark tables incl. GPT-5.5 Pro column)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 Pro model docs (OpenAI — API ID, 1.05M/128K window, $30/$180, no cache discount, Responses-only)](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [LM Council benchmarks (Epoch AI snapshots — GPQA 93.9%, FrontierMath v2 87.7%/78.0%, OTIS 100%, SimpleBench 76.9%)](https://lmcouncil.ai/benchmarks)
  - [Artificial Analysis — GPT-5.5 Pro (Xhigh) page (922k context, modalities; index N/A / "No publicly available API")](https://artificialanalysis.ai/models/gpt-5-5-pro)
  - [ARC-AGI-2 leaderboard (BenchLM.ai — ARC Prize semi-private: GPT-5.5 Pro xhigh 84.2%)](https://benchlm.ai/benchmarks/arc-agi-2)
  - [CritPt leaderboard (BenchmarkList — GPT-5.5 Pro xhigh 30.6%)](https://benchmarklist.com/benchmarks/critpt)
