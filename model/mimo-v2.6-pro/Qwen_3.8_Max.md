# MiMo-V2.6-Pro — findings by Qwen 3.8 Max

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft rested almost entirely on RankLLMs' scorecard and left three things unresolved: the open-weight-vs-proprietary license question, whether the *Pro* variant truly is omni-modal, and any independent long-context/faithfulness signal. AA resolves all three, and the corrections cut both ways. **Upward:** AA's spec table confirms **input is text, image, speech and video** (the draft hedged this), so Multimodal is genuinely omni → **80 → 84**; **AA-LCR 86.3** supplies the missing neutral long-context-reasoning evidence → **Context 88 → 90**; and AA lists **License MIT / open-weights, 1.0T total / 42B active**, resolving the card's proprietary-vs-open-weight discrepancy in favour of open-weight. **Downward:** the draft's cited **AA Intelligence Index 49.2 is inflated** — AA's live composite reads **30** (rank #3/22 only *within its open-weight size class*, where the class median is 23, not the ~37 full-market median); paired with a genuinely poor faithfulness profile (**AA-Omniscience accuracy 34.8, hallucination 60.2%, Index −4.5**) and **CritPt 26.6**, this caps Reasoning → **77 → 75**. **Agentic stays contested and is not lifted:** the vendor tech-report claims OSWorld-Verified 82% / Terminal-Bench 2.1 89.9, but RankLLMs measured OSWorld 42.5% and independent **AA Terminal-Bench 4.0 is only 34.8** — different harnesses, recorded not averaged; the neutral read confirms the draft's computer-use weakness, so Tool holds 76. Coding holds 88 (vendor DeepSWE 71.9 is new but not independently corroborated; coverage is thin at 37 of 724 on BenchLM, aggregate 56.44 #59/1004). **Overall 82 → 83** (Context +2 and Multimodal +4 net against Reasoning −2): the omni-modality and long-context verifications slightly outweigh the corrected-down reasoning ceiling. The value story is unchanged — AA measures **$0.26 per Index task (#5/21)** — though verbosity is very high (**130M, #17/22**), so real-world per-answer cost runs above the price list implies.

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship MiMo-tier multimodal reasoning/agent model, engineered for production enterprise use. Its defining trait is a world-class cost-to-intelligence ratio — near-frontier coding (SWE-bench Verified 78.4%) at $0.44/1M input — with a full 1M-token window. Ranks #11 of 85 on the RankLLMs composite (56.5/100, ahead of 88% of tracked models). Reasoning and computer-use sit clearly below the western frontier.
- **Provider / access:** Xiaomi MiMo, served via high-throughput managed API endpoints. **Resolved 2026-11-02:** AA lists the model as **open-weights under the MIT license** (1.0T total / 42B active parameters), settling the earlier proprietary-vs-open-weight discrepancy in favour of open-weight; weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`).
- **Release / knowledge:** Released 2026 (Q3–Q4; benchlm.ai page dated 2026-09-22, titled "October 2026"). Exact date and knowledge cutoff not published in accessible sources.
- **IDs:** `xiaomi/mimo-v2.6-pro`.
- **Context window:** 1,000,000 tokens (confirmed) — holds entire repos / long transcripts / multi-document sets in one session. No long-context retrieval benchmark (MRCR / needle-in-a-haystack) published; max output not separately published.
- **Modalities:** text + image + speech + video in → text out — **AA's spec table is authoritative and enumerates the V2.6-Pro variant's full omni input** (the draft only inferred this from the V2.5 family lineage); reasoning yes (explicit reasoning mode); tool calls yes (tool orchestration, computer use).
- **Pricing (as of 2026-10-20):** $0.44 / 1M input, $0.87 / 1M output — cheaper than ~68% of tracked models; ~55 tokens/s throughput (1M window).
- **Architecture:** open-weights (MIT) MoE foundation model; **AA (2026-11-02) lists 1.0T total / 42B active parameters** (the draft had this undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld (computer use / GUI automation): **42.5%** (radar "Agent & Tool Automation" 42.5% vs frontier Top-10 avg 71.2% — a clear weakness, -28.7 pts)
- BrowseComp (multi-step web navigation): **71.8%** (respectable but well below Kimi K3's 91.2 / GPT-5.6 Sol's 90.4)
- AA-Briefcase (Elo): **1,585**

Reasoning / knowledge:

- GPQA Diamond (graduate science reasoning): **65.2%** (vs frontier Top-10 avg 74.6%, -9.4 pts; far below Kimi K3 93.5% / GPT-5.6 94.1%)
- MATH-500 (competition math): **74.5%**
- MMLU & Knowledge QA: **70.6%** (radar: **+20.6 pts vs frontier Top-10 avg** — a genuine strength)
- Artificial Analysis Intelligence Index: **49.2** *(RankLLMs-cited — corrected 2026-11-02: AA's live composite is **30**, rank #3/22 within its open-weight size class where the class median is 23; 49.2 is an inflated/stale read and is not comparable to the current index.)*; RankLLMs composite: **56.5/100** (#11 of 85)
- **Independent (added 2026-11-02):** **AA-HLE 49.4**, **CritPt 26.6 (AA)**; **AA-Omniscience accuracy 34.8 / hallucination 60.2% / Index −4.5** (a genuinely poor faithfulness profile that caps reasoning); **AA-LCR 86.3** (strong long-context reasoning). Agentic contested: independent **AA Terminal-Bench 4.0 34.8** and **AA AutomationBench 58.6** vs vendor tech-report OSWorld-Verified 82 / TB 2.1 89.9 — recorded, not averaged.

Coding:

- SWE-bench Verified: **78.4%** (radar "Coding & SWE" 78.4% vs frontier Top-10 avg 79.1% — essentially frontier-parity, -0.7 pts; higher than Kimi K3's 76.8%)
- Terminal-Bench 2.1: **76.2%** (vs Top-10 avg 80.4%, -4.2 pts; below Kimi K3 88.3 / GPT-5.6 88.8)
- Code Arena / LMSYS (Elo, human-pref): **1,745**

Multimodal:

- Native multimodal vision + document analysis confirmed; **AA (2026-11-02) enumerates full omni input (text/image/speech/video) for this variant** — capability is now verified, not merely asserted. Still no discrete vision benchmark (MMMU-Pro / OmniDocBench / CharXiv) published (BenchLM coverage 37 of 724); only Design Arena Website 1307 (OpenRouter).

Long context:

- 1,000,000-token window confirmed. **Independent (2026-11-02): AA-LCR 86.3** (long-context reasoning) partially closes the draft's "no retrieval score" discount (MLCR-AA medical-LC 12.8 is the weaker sub-signal).

> Provenance: figures from RankLLMs' MiMo-V2.6-Pro scorecard (8 evaluated metrics; composite 56.5, #11 of 85) corroborated by benchlm.ai. Note an internal label quirk on the source page (radar "Reasoning & Math 65.2%" = GPQA Diamond; "Agent & Tool Automation 42.5%" = OSWorld). Parameter scale and exact release date are undisclosed.

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 71.8% and AA-Briefcase 1,585 are workable, but OSWorld computer use 42.5% is far below the frontier Top-10 (71.2%) — agentic autonomy is this model's weakest axis.
- **Reasoning: 75/100.** *(77 → 75 — corrected AA ceiling.)* MMLU/Knowledge QA 70.6% leads the frontier Top-10 average and MATH-500 74.5% is solid, but the independent read is weaker than the draft assumed: AA's live Intelligence Index is **30** (not the inflated 49.2), **CritPt 26.6**, and faithfulness is poor (**AA-Omniscience accuracy 34.8, hallucination 60.2%**). GPQA Diamond 65.2% (unverified independently) confirms sub-frontier graduate science reasoning.
- **Context window: 90/100.** *(88 → 90 — the "no retrieval score" discount is partially closed.)* A genuine, confirmed 1M-token window now backed by independent **AA-LCR 86.3** (strong long-context reasoning); still capped by no MRCR/needle score at extreme lengths and an undisclosed max-output cap (MLCR-AA 12.8 medical-LC is the weak sub-signal).
- **Multimodal: 84/100.** *(80 → 84 — omni modality now verified, not asserted.)* AA's spec table confirms **text + image + speech + video input** for this variant (well above the text-only floor), plus tool orchestration over a 1M window; still capped because no discrete vision benchmark (MMMU-Pro / OmniDocBench / CharXiv) is published — breadth is measured, per-task visual accuracy is not.
- **Coding: 88/100.** The standout quality axis — SWE-bench Verified 78.4% is at frontier parity (-0.7 vs Top-10 avg, and above Kimi K3's 76.8%), with Code Arena 1,745 Elo; held below 90 by Terminal-Bench 2.1 76.2% (-4.2 vs Top-10) and the absence of deep-repo (DeepSWE/FrontierSWE) results.
- **Cost efficiency: 95/100.** Best-in-class value — $0.44/$0.87 delivers near-frontier coding (SWE-bench Verified 78.4%) at a fraction of western flagship pricing (Opus 4.8 $15/$75, GPT-5.6 Sol ~$10/$30); one of the strongest cost-per-solved-task profiles tracked.
- **Overall Score: 83/100.** *(82 → 83.)* Mean of Tool 76 + Reasoning 75 + Context 90 + Multimodal 84 + Coding 88 = 413 / 5 = 82.6 → 83. Context +2 (AA-LCR) and Multimodal +4 (AA-verified omni input) net against Reasoning −2 (corrected AA Index 30 + poor faithfulness). Best fit: cost-sensitive high-volume agentic coding, 1M-token omni-modal document/audio/video processing and knowledge-heavy QA where the price-to-intelligence ratio dominates (AA **$0.26/Index task, #5/21**); hard graduate-level reasoning (GPQA/CritPt), faithfulness and autonomous computer-use still favor the pricier frontier models, and **verbosity 130M** erodes the cheap-token headline in practice.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20; re-researched 2026-11-02.
- Method: public internet research (RankLLMs' MiMo-V2.6-Pro benchmark scorecard and capability radar; corroborated by benchlm.ai for pricing/context/open-weight status); scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research sources (2026-11-02):** Artificial Analysis model page (`mimo-v2-6-pro` — live composite: Index 30 #3/22 class, $0.26/task #5/21, Speed 49.4 #57/79, Verbosity 130M, MIT open-weights, text/image/speech/video spec) and BenchLM (`mimo-v2-6-pro` — 56.44 #59/1004, 37 of 724) for AA-HLE/AA-LCR/Omniscience/TB-4.0 cells.
- **Conflict handling:** independent governs. AA's live Index 30 corrects the draft's inflated 49.2; adverse faithfulness (Omniscience accuracy 34.8, halluc 60.2) caps Reasoning. Vendor tech-report agentic rows (OSWorld-Verified 82, TB 2.1 89.9) kept alongside neutral RankLLMs OSWorld 42.5 / AA TB 4.0 34.8 as separate harnesses, never averaged; the neutral read governs Tool.
- **Guards:** AA class-rank (#3/22) read against its class median 23, not the ~37 full-market median (no overclaim of frontier parity); sibling MiMo-V2.6-Flash / predecessor MiMo-V2.5-Pro values not transferred; omni-modality credited only because AA enumerates it for *this* variant, not inferred from family lineage.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
