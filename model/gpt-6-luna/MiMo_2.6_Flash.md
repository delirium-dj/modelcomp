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
