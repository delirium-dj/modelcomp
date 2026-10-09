# GPT-6 Luna — findings by MiMo 2.6 Flash

- Source: OpenAI "Introducing GPT-6 Sol and Luna" launch post, Artificial Analysis, BenchLM (Astra system card + AA rows), ARC Prize, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna — OpenAI's **low-cost Luna volume tier of the GPT-6 family** (siblings: GPT-6 Astra flagship, GPT-6 Sol), released **2026-09-22** (AA; launch post "available starting today," updated 2026-09-29 for GPT-6.1 Sol). Predecessor: GPT-5.6 Luna.
- **Short description:** Trained with the same methods as Astra to "advance the frontier on cost efficiency": **DeepSWE v1.1 66.6 at max effort — "comparable to Claude Opus 5 and Fable 5 at medium effort" — at 93%/96% less cost per task**, and on AutomationBench it "improves on its predecessor by 5.4pp at 58% lower cost per task"; at higher effort its internal factuality "matches GPT-5.6 Sol at about a hundredth its cost." OSWorld 2.0 offline (max) exceeds GPT-5.6 Sol (medium) at one-tenth its cost. AA (Max): Intelligence Index **38 (#8/182 in price class, median 13)**, 129.4 t/s, somewhat verbose (140M vs 100M median), **TTFT 111 s** (extreme thinking latency). BenchLM: 65.6/100, #33/887 (27/623 coverage — "conservative").
- **Provider / access:** OpenAI API as `gpt-6-luna`; ChatGPT Work/Codex (Plus/Pro/Business/Enterprise/Edu), **Free/Go desktop access to Luna**; no Zen/free id (meta).
- **Release / knowledge:** 2026-09-22.
- **Context window:** **1.05M** (BenchLM; meta 1M) — AA 1M class.
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$0.10 / $0.50 per 1M** — a 50% cut vs GPT-5.6 Luna's promo pricing ($0.20/$1.20) (launch post; AA); **90% cache discount**, $0.07 per AA-Index task (#25/182 cost).

### Raw benchmarks found

> Primary: OpenAI launch post (Sep 2026, qualitative + DeepSWE/AutomationBench claims),
> AA's independent Max-effort page, BenchLM rows (AA + GPT-6 Astra system card +
> ARC Prize provenance), GPT-6 Astra system card (HealthBench inherited).

Agentic / tool use:

- **AA AutomationBench: 53.2** (+5.4pp over GPT-5.6 Luna at 58% lower cost per task, launch post).
- **GDPval-AA: 46.9% / Elo 1437**; AA-Briefcase Elo 1336; GDP.pdf 22.8%.
- **OSWorld 2.0 offline (max): exceeds GPT-5.6 Sol (medium)** at 1/10 the cost — value not published, flagged qualitative.
- Weak: **AA Terminal-Bench 4.0: 12.6**, ExploitGym 11.6 (Astra system card).

Coding:

- **DeepSWE v1.1: 66.6 (max)** — within ~2 points of GPT-6 Sol 68.8, at ~80-96% less per task (launch post); comparable to Opus 5 / Fable 5 at medium effort.
- **AA-SciCode: 54.6** — just under the 55 reference. No SWE-V/TB2.1/Coding-Index row for Luna yet (AA suite runs on Sol/Astra).

Reasoning & knowledge:

- **GPQA Diamond: 90.5** (Epoch, via Pareto table) — clears the 90 reference. **AA-HLE: 38.5** — just misses 40.
- **AA Intelligence Index: 38** (v4.3.2) — #8/182 in its price class, far above class median 13.
- **ARC-AGI-1: 86.70, ARC-AGI-2: 59.3** (ARC Prize verified) — strong pattern reasoning; ARC-AGI-3 0.1.
- AA-Omniscience 0.7 (accuracy 43.8, hallucination 76.7) — flat; HealthBench Hard 31.4 / Professional 60.8 (inherited from GPT-6 Astra system card, flagged INHERITED).
- Internal factuality: matches GPT-5.6 Sol at ~1/100 cost at higher effort (launch post).

Multimodal / long context:

- **AA-MMMU-Pro: 79.7** — top of the image band. **AA-LCR: 83.3** — strong 1M-class long-context reasoning; MLCR-AA 16.1, CritPt 19.4.

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench 53.2, GDPval 1437 and the OSWorld qualitative win over 5.6-Sol-medium are credible mid-upper agentic results; TB4 12.6 is weak and there is no BrowseComp/τ²/GDPval-Elo frontier row.
- **Reasoning: 83/100.** GPQA 90.5 clears, ARC-AGI-1 86.7 is strong and the price-class index (38, #8/182) is excellent value — but HLE 38.5 misses 40, Omniscience is flat, and absolute index level remains mid-pack among all frontier models.
- **Context window: 95/100.** 1.05M with AA-LCR 83.3 — 1M-class floor with a real retrieval-quality reading.
- **Multimodal: 68/100.** Text+image with MMMU-Pro 79.7 (top of image band) — no video/audio/PDF-native input or non-text output.
- **Coding: 83/100.** DeepSWE 66.6 (Opus-5-medium class) is strong; SciCode 54.6 just misses and the SWE-V/TB2.1/Coding-Index suite that anchors sibling reports simply hasn't been run for Luna yet — scored conservatively below the 5.6-Luna coding row (86).
- **Cost efficiency: 99/100** (excluded from Overall). $0.10/$0.50 with 90% cache and $0.07/AA-task — among the cheapest "near-frontier" tariffs anywhere in this queue; only the 111 s Max-effort TTFT keeps it from a nominal 100.
- **Overall Score: 82/100.** (82+83+95+68+83)/5 = 82.2 → 82 — the family bargain: DeepSWE-66.6-class coding, GPQA/ARC-cleared reasoning and a strong 1.05M window for $0.10/$0.50 — a thinner measurement profile than Sol/Astra and below-reference HLE/TB4 hold the absolute score at the mid-80s-minus band (queue 80.8).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — openai.com/index/introducing-gpt-6-sol-and-luna/ (pricing, DeepSWE/AutomationBench/OSWorld/factuality claims, availability), Artificial Analysis model page (release date, index 38, speed, cost, TTFT, MMMU-Pro/LCR/context), BenchLM (27 rows with per-row provenance incl. Astra system card and ARC Prize, family scores; updated 2026-10-07), Epoch GPQA row via Pareto's transcribed table, repo meta. Scores are normalized 1–100 interpretations, not official vendor scores; inherited Astra-system-card rows flagged; family ordering checked against own GPT-6 Astra (90), GPT-6.1 Sol (86), GPT-6 Sol (84) and GPT-5.6 Luna (82) reports.
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

