# GPT-6.1 Sol — findings by QoDuck

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's cost-efficient reasoning flagship (DevDay, Sep 2026), an upgrade to GPT-6 Sol that nearly matches GPT-6 Astra on agentic coding, computer use and professional work at ~1/5 the price. Targets long-horizon agentic/coding work; elite abstract reasoning (ARC-AGI-2, FrontierMath) with mid-pack terminal-task scores.
- **Provider / access:** OpenAI API `gpt-6.1-sol` (Responses + Chat Completions) at `https://developers.openai.com`. Also in ChatGPT Work and Codex (not regular ChatGPT chat). OpenRouter `openai/gpt-6.1-sol`. Proprietary; no open weights, no fine-tuning.
- **Release / knowledge:** Released 2026-09-29 (seven days after GPT-6 Sol, 2026-09-22). Knowledge cutoff 2026-04-30 (lmspedia; not on the official model docs page — treat as independent-reported).
- **IDs:** `openai/gpt-6.1-sol` (API + OpenRouter). No Free tier — paid API; subscription access via ChatGPT Work / Codex.
- **Context window:** 1,050,000 tokens total; max input 922,000; max output 128,000 (verified from the official developers.openai.com model docs). In Codex/ChatGPT Work the default context is 500K with no long-context surcharge on subscription usage.
- **Modalities:** Text + image in → text out (official; audio/video not supported). File/document upload accepted via the API (kilo.ai lists "File Image Text"), processed as text+image. Reasoning: yes (`low`, `medium` default, `high`, `xhigh`, `max`; the `none` setting was removed). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-11-10, official Standard tier):** $2.00 in / $10.00 out / $0.10 cached input per 1M; cache writes $2.50 (30m) / $5.00 (12h). Long context (>272K input): $4 in / $15 out / $0.20 cached for the whole request. Fast mode 2x ($4/$20); Ultrafast 6x; Batch/Flex 50% below Standard ($1 in / $5 out). 95% cache discount. (The $1/$5 figures circulating in some snippets are the Batch/Flex tier and GPT-6.1 Terra's own price — NOT a Sol price cut; confirmed against the live official pricing table.)
- **Architecture:** Proprietary (OpenAI; parameter count not disclosed). Reasoning model with a five-step effort ladder.

### Raw benchmarks found

> Official OpenAI launch-chart values are vendor-reported; independent values (Artificial Analysis, myclaw, benchmarklist, datalearner, Snorkel) are named. Absent benchmarks are marked "no verified public score found" — never invented.

Agent / tool use:

- BrowseComp (**browsing**): **95.4** (benchmarklist, rank #1 — elite)
- OSWorld 2.0 (**computer use**): **71.4** (benchmarklist/datalearner, rank #3; within 2.1 pts of Astra). OSWorld 2.1 offline: **78.0%** (OpenAI launch chart via kingy — different version).
- Coding Agent Index (AA/Codex, xhigh): **63** (rankerfox; ≈ GPT-6 Astra's 62, at ~1/5 the cost; emergent: "1 pt above Astra at <15% of cost")
- Agents' Last Exam v1: **58.6%** max (OpenAI chart via kingy)
- AutomationBench: **35.4%** medium (lmspedia, 2.2 pts above Opus 5.5) / **31.70** (datalearner, rank 40/152 — version/effort differs)
- APEX-Agents: **60** (datalearner, rank 15/64); AgentTime v1.1: **41.23** (rank #2)
- AA-Briefcase: **Elo 1555.1** (benchmarklist, rank 19; ~+80 Elo vs GPT-6 Sol per emergent)
- Terminal-Bench 4.0: **56.1%** (AA independent, max; myclaw: 5th of 6 in its cohort). OpenAI chart 55.9% max; datalearner 58.18% max (rank 10/130). See conflicts.
- GDPval-AA: **no verified public score found** (GDP.pdf 32.0% and GDPx 8.43 are the closest document-task proxies)
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE / Humanity's Last Exam: **52.9%** (benchmarklist, rank #15; clears the 40%+ top-band anchor)
- ARC-AGI-2: **94.17%** max (datalearner, rank #2/240; benchmarklist rank #3) — 91.67 high, 86.67 medium, 76.67 low
- ARC-AGI-1: **98.5** (datalearner, rank #1/255 high/xhigh)
- FrontierMath v2: **93.68** (datalearner, rank #2/122); FrontierMath Tier-4 v2: **100** (rank #1/80)
- ARC-AGI-3 (standard): **52.73** (benchmarklist rank #2; datalearner 8/73 — a separate max-set reads 96.37, see conflicts)
- Artificial Analysis Intelligence Index: **55 (Max), #12 of 74** (current official AA release page; release-avg 54.6). Older vintages: v5.0 54.5, v4.3 51.8, v4.3.2 xhigh 51 / high 50.
- CritPt: **31.71** (benchmarklist, rank #6); SimpleBench: **82.90** (rank #5); LiveBench 2.0: **85.41** (rank #4)
- AA-Omniscience v1.1: **61.8% accuracy / 51.9% hallucination** (kingy); emergent reports hallucination ~54% (down from GPT-6 Sol's 60%)
- GPQA Diamond: **no verified public score found** (not on benchmarklist/datalearner; HLE + ARC-AGI-2 + FrontierMath used as reasoning proxies)
- LCR / MLCR / AIME: **no verified public score found**

Coding:

- DeepSWE v1.1: **75.2%** Pass@1 high (benchmarklist rank #7/115; datalearner 75.20; matches Astra, +6.4 pts over GPT-6 Sol). Max effort ~71.9% (third-party transcription, indicative).
- SciCode: **55.8** (benchmarklist, rank #30) / 54.2% (myclaw) — clears the 55% anchor marginally
- SWE-Bench Pro V2: **96.11%** resolve rate (benchmarklist, rank #7 — V2 harness)
- Vibe Code Bench v1.1: **88.93** (datalearner, rank #11/119); IOI (Vals v2): **96.89** (rank #3)
- FrontierCode 1.1 Main: **50.20** (datalearner rank #8) / 49.1% (myclaw, AA); FrontierCode 2.0: **38.95–40.6%** max
- Code Migration: **65.12** (rank #6); SWE-Marathon: **42.5%** (benchmarklist rank #17); Agentic Coding 2.0: **42.8%** (Snorkel)
- APEX-SWE: **46.90** (datalearner, rank 23/72)
- SWE-bench Verified: **no verified public score found** — OpenAI did not publish it for this model (myclaw explicit); SWE-Bench Pro V2 96.11% / APEX-SWE 46.90 are proxies
- LiveCodeBench: **no verified public score found**

Multimodal (image):

- MMMU-Pro: **86.0%** (benchmarklist, rank #6/80, 94th percentile) / 86.30% max (datalearner, rank #8/254)
- CharXiv / video / audio benchmarks: **no verified public score found** (text+image only)

Cyber (self-reported / internal port):

- ExploitBench: **21.5%** (rank 3/5; Astra 31.5%); ExploitGym: **35.10** (rank #1/10); SEC-Bench Pro: **78.80** (rank #5)
- TroubleshootingBench (biology): **47.96%** (lmspedia; Astra 63.46% — a flagged science gap)

Long context:

- 1,050,000-token window (max input 922K / output 128K) verified from official docs. **No long-context retrieval accuracy (MRCR/RULER/GraphWalks) at 512K+ reported** — cannot confirm ≥98% retrieval, so Context is capped below 100.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 91/100.** BrowseComp 95.4 (#1), OSWorld 2.0 71.4 (#3), Coding Agent Index ≈Astra (63 xhigh at ~1/5 cost) and Agents' Last Exam 58.6 confirm elite agentic capability. Capped below the high-90s by mid-pack Terminal-Bench 4.0 (56.1%, 5th of 6 in myclaw's cohort) and no published GDPval-AA / Tau3 (the named top-band anchors).
- **Reasoning: 90/100.** HLE 52.9% clears the 40%+ anchor; ARC-AGI-2 94.17% (#2) and FrontierMath v2 93.68 (#2, Tier-4 100 #1) are elite abstract/math reasoning. Held at the band floor by the holistic AA Intelligence Index 55 (#12/74, below the 60+ anchor) and no published GPQA Diamond.
- **Context window: 95/100.** 1,050,000 tokens (922K in / 128K out) verified, placing it in the ≥1M = 95–100 tier. Held at 95 (not 100) because no ≥98% retrieval accuracy at 512K+ is published.
- **Multimodal: 68/100.** Text + image in → text out (official; no audio/video). Strong image reasoning (MMMU-Pro 86.0%, rank #6/80). Per the +image = 60–70 band; file/PDF upload is text+image extraction, not native video/audio, so it stays at the image-only tier.
- **Coding: 92/100.** DeepSWE 75.2% clears the 74%+ anchor, SciCode 55.8 clears the 55% anchor; SWE-Bench Pro V2 96.11%, Vibe Code 88.93 and IOI 96.89 are strong, and the Coding Agent Index ≈Astra. Capped by mid-pack Terminal-Bench 4.0 (56%), weak FrontierCode 2.0 (~40%) and no published SWE-bench Verified.
- **Cost efficiency: 73/100.** Standard $2 in / $10 out sits between the $3/$15≈60 and $1.25/$4.25≈88 anchors; the 95% cache discount ($0.10 cached) and Batch/Flex $1/$5 tier add value, and it delivers near-Astra capability at ~1/5 the price ($0.72/Index task vs Astra $3.26). Proprietary (no free self-host).
- **Overall Score: 87.2/100.** Mean of (91 + 90 + 95 + 68 + 92) = 436 / 5 = 87.2. Best fit: near-frontier agentic coding + computer use at a fraction of Astra's cost, with elite abstract reasoning — ideal for high-volume Codex/agent workloads where mid-pack terminal-task scores are acceptable.

### Conflicting-results notes

- **Pricing (resolved):** the live official pricing table confirms GPT-6.1 Sol **Standard = $2 in / $10 out / $0.10 cached**. Snippets showing "$1/$5/$0.05" are (a) Sol's **Batch/Flex** tier (50% below Standard) and (b) **GPT-6.1 Terra's** own Standard price — not a Sol price cut. Long-context (>272K) is $4/$15; Fast mode $4/$20.
- **AA Intelligence Index vintage:** current official AA = **55 (Max), #12/74**; earlier independent captures read 54.5 (v5.0), 51.8 (v4.3), 50–51 (v4.3.2 high/xhigh), and emergent's launch-day "52". These are Index-version/effort differences, not contradictions; the current Max value (55) is used.
- **Terminal-Bench 4.0 harness/rank:** AA independent 56.1% (myclaw: 5th of 6), OpenAI chart 55.9% max, datalearner 58.18% max (rank 10/130), Codex-harness 52–55% (rankerfox), Snorkel "tied third", aiiq "#7 of 104". Ranks differ by comparison cohort; the ~56% max-effort AA value is the headline. Note TB4.0 is a harder 66-task benchmark — not comparable to TB2.1 percentages.
- **OSWorld version:** 2.0 = 71.4% (rank #3) vs 2.1 offline = 78.0% (OpenAI chart). Different benchmark versions; both reported.
- **AutomationBench version:** 35.4% medium (lmspedia, "above Opus 5.5") vs 31.70 (datalearner, rank 40/152). Effort/version differs.
- **ARC-AGI-3:** standard set 52.73 (rank #2) vs a separate max-set reading 96.37 (datalearner) — different task sets; the standard 52.73 is used.
- **MMMU-Pro:** 86.0% (benchmarklist, rank 6/80) vs 86.30% max (datalearner, rank 8/254) — rounding/effort; consistent.
- **Not published:** SWE-bench Verified (OpenAI omitted it; myclaw confirms), GPQA Diamond, GDPval-AA absolute, LiveCodeBench — marked "no verified public score found", with named proxies. SWE-Bench Pro V2 96.11% is a V2-harness figure, not SWE-bench Verified.
- **Hallucination:** AA-Omniscience v1.1 51.9% (kingy) vs ~54% (emergent) — vintage difference; both indicate a high hallucination rate (~52–54%), down from GPT-6 Sol's 60%.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official developers.openai.com model docs + live pricing table (primary, fetched directly) cross-checked against the OpenAI launch announcement (403; via independent transcriptions), Artificial Analysis release page, benchmarklist, datalearner, myclaw, emergent, lmspedia, rankerfox, kingy and Snorkel; ≥5 successful independent web searches; vendor-vs-independent and cross-vintage conflicts reconciled above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Sol — official OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [OpenAI API — official pricing table](https://developers.openai.com/api/docs/pricing)
  - [Introducing GPT-6.1 Sol — OpenAI announcement](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [Artificial Analysis — GPT-6.1 Sol release](https://artificialanalysis.ai/models/releases/gpt-6-1-sol)
  - [BenchmarkList — GPT-6.1 Sol scores & evals](https://benchmarklist.com/models/openai-gpt-6.1-sol/)
  - [DataLearner — GPT-6.1 Sol benchmark analysis](https://www.datalearner.com/en/ai-models/pretrained-models/gpt-6-1-sol/analysis)
  - [myclaw — GPT-6.1 Sol for coding (Terminal-Bench 4.0)](https://myclaw.ai/blog/gpt-6-1-sol-for-coding)
  - [emergent.sh — GPT-6.1 Sol benchmarks: near-Astra, lower cost](https://emergent.sh/learn/gpt-6-1-sol-benchmarks)
  - [lmspedia — GPT-6.1 Sol pricing & benchmarks vs Astra](https://lmspedia.org/gpt-6-1-sol/)
  - [OpenRouter — openai/gpt-6.1-sol](https://openrouter.ai/openai/gpt-6.1-sol)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.