# MiMo-V2.6-Pro — findings by Qwen 3.8 Max

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship MiMo-tier multimodal reasoning/agent model, engineered for production enterprise use. Its defining trait is a world-class cost-to-intelligence ratio — near-frontier coding (SWE-bench Verified 78.4%) at $0.44/1M input — with a full 1M-token window. Ranks #11 of 85 on the RankLLMs composite (56.5/100, ahead of 88% of tracked models). Reasoning and computer-use sit clearly below the western frontier.
- **Provider / access:** Xiaomi MiMo, served via high-throughput managed API endpoints. RankLLMs lists the license as **proprietary**; benchlm.ai describes it as **open-weight** — the discrepancy is unresolved in accessible sources (the wider MiMo-V2 line has open releases, e.g. the MiMo-V2-Flash arXiv technical report).
- **Release / knowledge:** Released 2026 (Q3–Q4; benchlm.ai page dated 2026-09-22, titled "October 2026"). Exact date and knowledge cutoff not published in accessible sources.
- **IDs:** `xiaomi/mimo-v2.6-pro`.
- **Context window:** 1,000,000 tokens (confirmed) — holds entire repos / long transcripts / multi-document sets in one session. No long-context retrieval benchmark (MRCR / needle-in-a-haystack) published; max output not separately published.
- **Modalities:** text + image (native multimodal vision, document analysis) in → text out; reasoning yes (explicit reasoning mode); tool calls yes (tool orchestration, computer use). The MiMo-V2 family is natively omni-modal (text/image/video/audio per the V2.5 release), but V2.6-Pro's exact modality set is not separately enumerated in accessible sources.
- **Pricing (as of 2026-10-20):** $0.44 / 1M input, $0.87 / 1M output — cheaper than ~68% of tracked models; ~55 tokens/s throughput (1M window).
- **Architecture:** proprietary foundation model; parameter scale undisclosed (reported as MoE-class in the MiMo-V2 line).

### Raw benchmarks found

Agent / tool use:

- OSWorld (computer use / GUI automation): **42.5%** (radar "Agent & Tool Automation" 42.5% vs frontier Top-10 avg 71.2% — a clear weakness, -28.7 pts)
- BrowseComp (multi-step web navigation): **71.8%** (respectable but well below Kimi K3's 91.2 / GPT-5.6 Sol's 90.4)
- AA-Briefcase (Elo): **1,585**

Reasoning / knowledge:

- GPQA Diamond (graduate science reasoning): **65.2%** (vs frontier Top-10 avg 74.6%, -9.4 pts; far below Kimi K3 93.5% / GPT-5.6 94.1%)
- MATH-500 (competition math): **74.5%**
- MMLU & Knowledge QA: **70.6%** (radar: **+20.6 pts vs frontier Top-10 avg** — a genuine strength)
- Artificial Analysis Intelligence Index: **49.2**; RankLLMs composite: **56.5/100** (#11 of 85)

Coding:

- SWE-bench Verified: **78.4%** (radar "Coding & SWE" 78.4% vs frontier Top-10 avg 79.1% — essentially frontier-parity, -0.7 pts; higher than Kimi K3's 76.8%)
- Terminal-Bench 2.1: **76.2%** (vs Top-10 avg 80.4%, -4.2 pts; below Kimi K3 88.3 / GPT-5.6 88.8)
- Code Arena / LMSYS (Elo, human-pref): **1,745**

Multimodal:

- Native multimodal vision + document analysis confirmed (1M-token multimodal document processing is a recommended workflow); no discrete vision benchmark (MMMU-Pro / OmniDocBench / CharXiv) published in accessible sources.

Long context:

- 1,000,000-token window confirmed; no published long-context retrieval score at extreme lengths.

> Provenance: figures from RankLLMs' MiMo-V2.6-Pro scorecard (8 evaluated metrics; composite 56.5, #11 of 85) corroborated by benchlm.ai. Note an internal label quirk on the source page (radar "Reasoning & Math 65.2%" = GPQA Diamond; "Agent & Tool Automation 42.5%" = OSWorld). Parameter scale and exact release date are undisclosed.

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 71.8% and AA-Briefcase 1,585 are workable, but OSWorld computer use 42.5% is far below the frontier Top-10 (71.2%) — agentic autonomy is this model's weakest axis.
- **Reasoning: 77/100.** MMLU/Knowledge QA 70.6% actually leads the frontier Top-10 average (+20.6) and MATH-500 74.5% is solid, but GPQA Diamond 65.2% and AA Intelligence Index 49.2 are decisively below the frontier leaders (Kimi K3 93.5% / Index 57.1) — strong crystallized knowledge, weaker graduate-level scientific reasoning.
- **Context window: 88/100.** A genuine, confirmed 1M-token window with multimodal document processing; discounted because no long-context retrieval benchmark (MRCR / needle) is published and the max-output cap is undisclosed.
- **Multimodal: 80/100.** Native vision + document analysis + tool orchestration over a 1M window (an omni-modal family lineage); capped because no discrete vision benchmark is published in accessible sources, so strength is asserted rather than measured.
- **Coding: 88/100.** The standout quality axis — SWE-bench Verified 78.4% is at frontier parity (-0.7 vs Top-10 avg, and above Kimi K3's 76.8%), with Code Arena 1,745 Elo; held below 90 by Terminal-Bench 2.1 76.2% (-4.2 vs Top-10) and the absence of deep-repo (DeepSWE/FrontierSWE) results.
- **Cost efficiency: 95/100.** Best-in-class value — $0.44/$0.87 delivers near-frontier coding (SWE-bench Verified 78.4%) at a fraction of western flagship pricing (Opus 4.8 $15/$75, GPT-5.6 Sol ~$10/$30); one of the strongest cost-per-solved-task profiles tracked.
- **Overall Score: 82/100.** Mean of Tool 76 + Reasoning 77 + Context 88 + Multimodal 80 + Coding 88 = 81.8 → 82. Best fit: cost-sensitive high-volume agentic coding, 1M-token multimodal document processing and knowledge-heavy QA where the price-to-intelligence ratio dominates; hard graduate-level reasoning (GPQA) and autonomous computer-use still favor the pricier frontier models.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (RankLLMs' MiMo-V2.6-Pro benchmark scorecard and capability radar; corroborated by benchlm.ai for pricing/context/open-weight status); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
