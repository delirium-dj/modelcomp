# GPT-6 Luna — findings by MiMo 2.6 Flash

- Source: OpenAI "Introducing GPT-6 Sol and Luna" launch post, Artificial Analysis, BenchLM (Astra system card + AA rows), ARC Prize, repo meta
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-07 (Overall 82). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-10, overall 62.38, rank #44/1020, 65/804 rows — was
> 65.6 #33/887) and the Artificial Analysis model page (v5.0.1 index scale).
> Changes: Tool use 82→83 (first **measured** computer-use row — OSWorld 2.1
> Offline **48.9% partial / 37.1% strict**, Anthropic Haiku 5.5 system card —
> replacing the previous qualitative-only OSWorld claim; plus Agents' Last
> Exam (Linux) **57.1%**, Hermes Bench **70.5%**, AA-AnalystAgent 43.8%,
> GDPval-AA **1444** Elo / AA-Briefcase **1337** re-confirmed, AA Cyber Index
> 52.7 / CyberGym-E2E 77.9; offset by Terminal-Bench **4.1** 15.2% floor and
> MazeBench 0%), Cost efficiency 99→97 (OpenAI now bills prompts **above
> 272K at 2× input/cache and 1.5× output for the whole request**, plus
> $0.15 per AA-Index task on the new 9-eval scale — long-context agents don't
> get the banner rate). Held: Reasoning 83 (new FrontierMath v2 T1–3
> **78.947%** / T4 56.098% is a strong first math row, but offset by
> AA-Omniscience re-measured to net **-8.3** (acc 39.6, hallucination 79.3)
> and the Intelligence Index re-basing 38→**27.9** on v5.0.1), Context 95
> (AA-LCR 83.3 confirmed, MLCR-AA now 26.1, still no MRCR/RULER), Multimodal
> 68 (new ExtractBench 91.01 / ParseBench 64.13 / PerceptionBench-tools 62.8
> are mid-strong confirmations; text-only-out cap unchanged), Coding 83
> (DeepSWE 66.6 and AA-SciCode 54.6 unchanged; new FrontierCode 2.0 21.9
> [Cognition] / 25.2 [AA] and Bug Hunt Bench 18.3 are harder-harness rows
> that don't move it; still no SWE-V/TB2.1/Coding-Index row for Luna).
> Overall 82 unchanged (mean 82.2 → 82.4).

## Model card

- **Name:** GPT-6 Luna — OpenAI's **low-cost Luna volume tier of the GPT-6 family** (siblings: GPT-6 Astra flagship, GPT-6 Sol), released **2026-09-22** (AA; launch post "available starting today," updated 2026-09-29 for GPT-6.1 Sol). Predecessor: GPT-5.6 Luna.
- **Short description:** Trained with the same methods as Astra to "advance the frontier on cost efficiency": **DeepSWE v1.1 66.6 at max effort — "comparable to Claude Opus 5 and Fable 5 at medium effort" — at 93%/96% less cost per task**, and on AutomationBench it "improves on its predecessor by 5.4pp at 58% lower cost per task"; at higher effort its internal factuality "matches GPT-5.6 Sol at about a hundredth its cost." OSWorld 2.0 offline (max) exceeds GPT-5.6 Sol (medium) at one-tenth its cost. AA (Max): Intelligence Index **38 (#8/182 in price class, median 13)** on the launch-era v4.3.2 scale → **27.9 (v5.0.1, #12/332)** current; 104 t/s, somewhat verbose (110M vs 90M median), **TTFT 73.43 s** (AA, improved from the launch-era 111 s). BenchLM: **62.38/100, #44/1020** (65/804 coverage, snapshot 2026-11-10 — was 65.6 #33/887).
- **Provider / access:** OpenAI API as `gpt-6-luna`; ChatGPT Work/Codex (Plus/Pro/Business/Enterprise/Edu), **Free/Go desktop access to Luna**; no Zen/free id (meta).
- **Release / knowledge:** 2026-09-22.
- **Context window:** **1.05M** (BenchLM; meta 1M) — AA 1M class.
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$0.10 / $0.50 per 1M** — a 50% cut vs GPT-5.6 Luna's promo pricing ($0.20/$1.20) (launch post; AA); **90% cache discount** ($0.01 cache read, $0.125 cache write); $0.15 per AA-Index task on the current 9-eval v5.0.1 scale (AA, #12/33 cost). **Long-prompt cliff (new this pass): prompts above 272K input tokens are charged at 2× input and cache rates and 1.5× output for the entire request**; regional processing +10% where available; Batch/Flex 50%, Fast mode 2× (OpenAI model docs via BenchLM price registry, updated 2026-11-09).

### Raw benchmarks found

> Primary: OpenAI launch post (Sep 2026, qualitative + DeepSWE/AutomationBench claims),
> AA's independent Max-effort page, BenchLM rows (AA + GPT-6 Astra system card +
> ARC Prize provenance), GPT-6 Astra system card (HealthBench inherited).

Agentic / tool use:

- **AA AutomationBench: 53.2** (+5.4pp over GPT-5.6 Luna at 58% lower cost per task, launch post); strict variant **20.2%** (Meta Muse Ember launch comparison, 2026-11-09 — new)
- **GDPval-AA: 46.6% normalized / Elo 1444** (AA leaderboard, via BenchLM 2026-11-10 — re-confirmed, was 1437/46.9); AA-Briefcase Elo **1337** (re-confirmed, was 1336); GDP.pdf 22.8%; AA-AnalystAgent **43.8%** (AA — new)
- **OSWorld 2.1 Offline: 48.9% partial / 37.1% strict** (Anthropic Claude Haiku 5.5 system card, via BenchLM 2026-11-10 — **first measured computer-use row**; strict ties Haiku 5.5's 37.1). Previous qualitative claim stands: OSWorld 2.0 offline (max) exceeds GPT-5.6 Sol (medium) at 1/10 the cost — value not separately published.
- **Agents' Last Exam (Linux): 57.1%** (Meta Muse Ember launch comparison — new); Hermes Bench **70.5%** / Hermes Index **33.9%** (Nous Research — new)
- Cyber/agentic rows (AA, new): AA Cyber Index **52.7%**, CWE-Bench-AA **56.7%**, CyberGym-E2E **77.9%**, DeepsecBench-AA 23.5%
- Weak: **AA Terminal-Bench 4.0: 12.6**, **Terminal-Bench 4.1: 15.20%** (official tbench.ai leaderboard, via BenchLM — floor confirmed), ExploitGym 11.6 (Astra system card), MazeBench **0%** (ASCII mode), AA AutomationBench strict 20.2

Coding:

- **DeepSWE v1.1: 66.6 (max)** — within ~2 points of GPT-6 Sol 68.8, at ~80-96% less per task (launch post); comparable to Opus 5 / Fable 5 at medium effort.
- **AA-SciCode: 54.6** — just under the 55 reference. No SWE-V/TB2.1/Coding-Index row for Luna yet (AA suite runs on Sol/Astra).
- **FrontierCode 2.0: 21.9%** (Cognition) / **25.2%** (AA, via Meta Muse Ember comparison) — new, harder v2 harness; Bug Hunt Bench **18.3 fixes** (public data — new).

Reasoning & knowledge:

- **GPQA Diamond: 90.5** (Epoch, via Pareto table) — clears the 90 reference. **AA-HLE: 38.5** — just misses 40.
- **FrontierMath v2: 78.947% (Tiers 1–3) / 56.098% (Tier 4)** — Epoch AI FrontierMath v2 leaderboard, via BenchLM 2026-11-10 (**new this pass — first verified math row**, above Claude Haiku 5.5's 75.088 and Grok 4.6's 65.965).
- **AA Intelligence Index: 38** (v4.3.2 launch-era) → **27.9 (v5.0.1, current AA leaderboard; #12/332)** — the new 9-eval scale (adds Briefcase, HLE-Diamond, CritPt v2-hard, TB-Science, drops older components); still above the class median (24).
- **ARC-AGI-1: 86.70, ARC-AGI-2: 59.3** (ARC Prize verified) — strong pattern reasoning; ARC-AGI-3 0.1 (0.59 with provider adapter).
- AA-Omniscience **-8.3 net** (accuracy **39.6**, hallucination **79.3**) — re-measured down (was +0.7 / 43.8 / 76.7); CritPt 19.4; HealthBench Hard 31.4 / Professional 60.8 (inherited from GPT-6 Astra system card, flagged INHERITED).
- Internal factuality: matches GPT-5.6 Sol at ~1/100 cost at higher effort (launch post).

Multimodal / long context:

- **AA-MMMU-Pro: 79.7** — top of the image band. Document understanding (new this pass): **ExtractBench: 91.01%**, **ParseBench: 64.13%**, **PerceptionBench (tools): 62.8%** (LlamaIndex / Meta Muse Ember comparison, 2026-11-09 snapshots); ExtractBench Pro reads 0% on the BenchLM row (flagged — likely no-data rendering, not leaned on).
- **AA-LCR: 83.3** — strong 1M-class long-context reasoning; MLCR-AA **26.1** (medical LCR, revised up from 16.1), CritPt 19.4. No MRCR/RULER window-length retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 83/100.** AutomationBench 53.2, GDPval-AA 1444 and AA-Briefcase 1337 are credible mid-upper agentic results, and the profile has its first **measured** computer-use row — OSWorld 2.1 Offline 48.9% partial / 37.1% strict (strict matching Haiku 5.5) — plus Agents' Last Exam Linux 57.1 and Hermes Bench 70.5 filling previously-silent slots → 83 (was 82). Capped by Terminal-Bench 4.0/4.1 at 12.6/15.2 (a floor reading), MazeBench 0, and still no BrowseComp/τ²-Bench row.
- **Reasoning: 83/100.** GPQA 90.5 clears and ARC-AGI-1 86.7 is strong; the new FrontierMath v2 T1–3 **78.947%** is a first-class math row (above Haiku 5.5's 75.1). Held at 83: the AA Intelligence Index re-based 38→27.9 on v5.0.1 (all-model scale change, not a Luna-specific collapse), AA-Omniscience drifted down (net -8.3, 79.3% hallucination), and HLE 38.5 still misses 40.
- **Context window: 95/100.** 1.05M with AA-LCR 83.3 — 1M-class floor with a real retrieval-quality reading (MLCR-AA now 26.1); no MRCR/RULER window-length retrieval figure to score higher.
- **Multimodal: 68/100.** Text+image with MMMU-Pro 79.7 (top of image band); new document rows (ExtractBench 91.01, ParseBench 64.13, PerceptionBench-tools 62.8) confirm solid image/document understanding but don't change the cap — no video/audio/PDF-native input or non-text output.
- **Coding: 83/100.** DeepSWE 66.6 (Opus-5-medium class) is strong; SciCode 54.6 just misses and the SWE-V/TB2.1/Coding-Index suite that anchors sibling reports simply hasn't been run for Luna yet — scored conservatively below the 5.6-Luna coding row (86); the new FrontierCode 2.0 rows (21.9 Cognition / 25.2 AA, harder harness) don't move it.
- **Cost efficiency: 97/100** (excluded from Overall). $0.10/$0.50 with 90% cache remains among the cheapest "near-frontier" tariffs anywhere in this queue — but the newly documented **>272K whole-request cliff (2× input/cache, 1.5× output)** means long-context agent runs don't get the banner rate, and AA now measures $0.15 per Index task on the 9-eval scale (was $0.07) → 97 (was 99).
- **Overall Score: 82/100.** (83+83+95+68+83)/5 = 412/5 = 82.4 → 82 — the family bargain: DeepSWE-66.6-class coding, GPQA/ARC/FrontierMath-cleared reasoning, the first measured OSWorld row and a strong 1.05M window for $0.10/$0.50 — below-reference HLE/TB4 and a below-frontier absolute index hold the score at 82.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with per-row provenance — AA leaderboards, Anthropic Haiku 5.5 system card, Meta Muse Ember comparison, ARC Prize, Epoch AI FrontierMath v2, Cognition FrontierCode 2.0, Nous Research Hermes, LlamaIndex ExtractBench/ParseBench, official Terminal-Bench 4.1 leaderboard — plus the Artificial Analysis model page on the v5.0.1 index scale and OpenAI model-doc pricing via the BenchLM price registry). Scores are normalized 1–100 interpretations, not official vendor scores; inherited Astra-system-card rows flagged; previous Signature 2026-10-07.
- Reference URLs:
  - [GPT-6 Luna (BenchLM, snapshot 2026-11-10)](https://benchlm.ai/models/gpt-6-luna)
  - [GPT-6 Luna (Artificial Analysis)](https://artificialanalysis.ai/models/gpt-6-luna)
  - [Introducing GPT-6 Sol and Luna (OpenAI)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [GPT-6 Luna model documentation (OpenAI)](https://developers.openai.com/api/docs/models/gpt-6-luna)
  - [FrontierMath v2 leaderboard (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# GPT-6 Luna — findings by Mimo v2.6 Flash

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's entry-level GPT-6 tier (2026-09-22), trained with GPT-6 Astra methods for high-volume, cost-sensitive tasks; replaces GPT-5.6 Luna at ~half the token price with level intelligence. Not an alias of GPT-5.6 Luna.
- **Provider / access:** OpenAI API (`gpt-6-luna` — Chat Completions), ChatGPT Free/Go desktop, ChatGPT Work/Codex; not in Chat as of launch.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-05-18 (OpenAI model docs).
- **IDs:** `openai/gpt-6-luna`; no OpenCode Zen Free ID confirmed in gathered sources — paid API.
- **Context window:** 1,050,000 total (≈922K input headroom + 128K max output) — OpenAI API docs via llm-stats/HokAI.
- **Modalities:** text/image in; text out; reasoning efforts none/low/medium/high/xhigh/max; tool calls; no native audio/video.
- **Pricing (as of 2026-09-24):** $0.10 / $0.50 per 1M in/out; cache read $0.01 (90% off); cache write $0.125 — OpenAI/AA. Paid (cheap tier).
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- AutomationBench: **20.7%** at max effort (OpenAI launch chart data via MetricNexus/Digital Applied)
- Agents' Last Exam: **50.9%** max (OpenAI launch)
- OSWorld 2.0 offline: **52.7%** max (OpenAI launch; ties GPT-5.6 Luna)
- GDPval-AA v2.1: **no absolute value** — AA reports ~75 Elo regression vs GPT-5.6 Luna at max (Artificial Analysis, 2026-09-22)
- Tau3 / Toolathon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37** max / 34 xhigh / 29 medium / 18 non-reasoning (Artificial Analysis, 2026-09-24 release page)
- HLE: **38.5%** (LMSpeed citing BenchLM-class coverage, 2026-09-23)
- AA-Omniscience: hallucination rate **77%** at max (down from 93% GPT-5.6 Luna); accuracy ~44% (AA)
- HealthBench: **50.0%** raw / 54.5% length-adjusted; HealthBench Hard 31.4% (BenchLM)
- GPQA Diamond: **no verified public score found** for Luna specifically
- Factual error rate (OpenAI internal): **7.6%** max (down from 12.0% GPT-5.6 Luna)

Coding:

- DeepSWE v1.1: **66.6%** max (OpenAI launch — only absolute coding score OpenAI published for Luna)
- FrontierCode 1.1: **42.4%** max (OpenAI launch chart)
- AA Coding Agent Index: **41** max (down 2 pts from GPT-5.6 Luna's 43 — AA, Codex harness)
- SWE-Atlas-QnA: **44%** (AA, down from 49%)
- SciCode: **54.6%** (LMSpeed/BenchLM, 2026-09-23)
- SWE-bench Verified: **no verified public score found**

Long context:

- 1.05M window documented; MRCR/RULER retrieval quality: **no verified public score found**

Multimodal:

- Text/image in; AA-MMMU-Pro: **75.5%** (LMSpeed citing AA, #32/71 peer set)
- Video/audio: not supported

### Normalized scores (1–100)

- **Tool use: 58/100.** AutomationBench 20.7% and Agents' Last Exam 50.9% are entry-tier for GPT-6; OSWorld 52.7% helps but GDPval regressed — mid-band per methodology.
- **Reasoning: 68/100.** AA Intelligence Index 37 (max) holds level with GPT-5.6 Luna but sits well below frontier (50+); HLE 38.5% and improving factuality keep it in the high-60s.
- **Context window: 98/100.** 1.05M window clears the ≥1M tier with 128K out; not 100 without published retrieval-at-window rates.
- **Multimodal: 70/100.** Image input with AA-MMMU-Pro 75.5%; capped by text-only output and no video/audio.
- **Coding: 72/100.** DeepSWE 66.6% and FrontierCode 42.4% are respectable; AA Coding Index 41 (regressed vs predecessor) and missing SWE-Verified cap it low-70s.
- **Cost efficiency: 96/100.** $0.10/$0.50 with $0.01 cache reads — near the ~$0.10/$0.20 (97–99) anchor; slightly lower on weaker output pricing.
- **Overall Score: 73.2/100.** Mean of Tool 58 + Reasoning 68 + Context 98 + Multimodal 70 + Coding 72 = 366/5 = 73.2 — best-fit for high-volume cheap agents and extraction; step up to GPT-6 Sol/Astra for frontier coding/reasoning.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (OpenAI launch post, AA GPT-6 Sol/Luna article + release page, MetricNexus, HokAI, emergent.sh, LMSpeed/BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

