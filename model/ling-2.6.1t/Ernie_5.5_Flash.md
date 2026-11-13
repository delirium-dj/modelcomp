# Ling 2.6-1T — findings by Ernie 5.5 Flash

- Source: InclusionAI/Ling 2.6-1T (`ling-2.6.1t`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6-1T (the dataset slug drops the dots: `ling-2.6.1t`)
- **Short description:** InclusionAI's (Ant Group) trillion-parameter open-weights Ling flagship (released 2026-04-23) — the non-reasoning sibling of Ring 2.6-1T, positioned for fast general chat, tool use and cost-efficient high-volume serving. Predecessor of the Ling 3.x line.
- **Provider / access:** OpenRouter (`inclusionai/ling-2.6-1t`), Requesty and other gateways; open weights on Hugging Face / ModelScope.
- **Release / knowledge:** 2026-04-23; knowledge cutoff not published.
- **IDs:** `ling-2.6.1t` (dataset), `inclusionAI/Ling-2.6-1T` (HF), `inclusionai/ling-2.6-1t` (OpenRouter).
- **Context window:** 262,144 tokens.
- **Modalities:** text in / text out; reasoning off (non-reasoning variant); function calling / tool use.
- **Pricing (as of 2026-11-13):** $0.075 in / $0.625 out per 1M (BenchmarkList/OpenRouter); Requesty lists $0.30/$2.50.
- **Architecture:** proprietary/undisclosed 1T-class Ling MoE.

### Raw benchmarks found

> Independent tracker rows (BenchmarkList / Artificial Analysis leaderboards, sampled Jul–Oct 2026) — first per-benchmark evidence for this ID.

Agent / tool use:

- Tau2-Bench Telecom: **89.8%** (rank 57/337, 83rd pct — 2nd best in class behind Qwen3.8 Flash's 90.4%)
- Terminal-Bench Hard: **31.1%** (70/326, 79th pct — within 2.3 pp of the leader)
- GDPval-AA: **1045 Elo** (111/359, 69th pct)
- ClawProBench: **57.4** (23/48, 53rd pct); Gert Labs: **25.0%** GScore (61/62, 2nd pct)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26.05** (121/325, 63rd pct)
- GPQA Diamond: **75.2%** (185/481, 62nd pct); HLE: **8.7%** (233/491); CritPt: **0.3%**; AA-Omniscience: **−51 points**
- ObviousBench pass³: **68.8%** (177/275, 36th pct); NYT Connections Extended: **10.8%** (64/64 — last)

Coding:

- BLXBench: **75.3%** (8/25, 71st pct); SciCode: **37.0%** (157/312, 50th pct)

Long context:

- AA-LCR: **41.7%** (234/425, 45th pct); 262,144 declared.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2-Telecom 89.8% and Terminal-Bench Hard 31.1% are near the top of the open-model field; GDPval-AA 1045 and ClawProBench 57.4 are mid. This is the model's strongest dimension.
- **Reasoning: 60/100.** GPQA 75.2% is mid-tier, HLE 8.7% and AA-Omniscience −51 are weak; ObviousBench 68.8% and NYT Connections last place show reliability gaps. Mid-band for a non-reasoning 1T model.
- **Context window: 85/100.** 262,144 — tier 200K–500K band; AA-LCR 41.7% is the weakest part of the profile.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 58/100.** BLXBench 75.3% is decent but SciCode 37.0% is mid; the BenchmarkList head-to-head shows −31 to −50 pt coding deficits vs peers.
- **Cost efficiency: 95/100.** $0.075/$0.625 per 1M (OpenRouter) for 1T-class quality — among the cheapest per capability point.
- **Overall Score: 59.6/100.** Best fit for high-volume chat, telecom-style tool agents and cheap 1T-class serving where agentic throughput matters more than raw reasoning; text-only modality and mid-pack knowledge rows cap it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (BenchmarkList model record with 14 benchmark rows, Artificial Analysis index rows, InclusionAI catalogue facts); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ling-2.6-1T — BenchmarkList (14 benchmark rows)](https://benchmarklist.com/models/inclusionai-ling-2.6-1t/)
  - [Ling-2.6-1T — OpenRouter](https://openrouter.ai/inclusionai/ling-2.6-1t)
  - [inclusionAI — Hugging Face](https://huggingface.co/inclusionAI)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.