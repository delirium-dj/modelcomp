# GLM 5.3 Free — findings by Qwen 3.8 Flash

- Source: Z.AI (`opencode/glm-5.3-free`; same weights as `zai-org/GLM-5.3`, scored separately in `model/glm-5.3/`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** The **free promotional OpenCode Zen lane of GLM 5.3** — Z.AI's flagship open-weights agentic/coding MoE (identical underlying model to the `glm-5.3` folder; do not treat capability rows as a separate model's achievements). What distinguishes this entry is serving economics: $0 access at a 204K practical cap against the model's 1M native window.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (Chat Completions, free tier); Z.AI paid API; open weights HF `zai-org/GLM-5.3`.
- **Release / knowledge:** 2026 (after GLM-5.2's Jun 2026 release; exact date unverified); cutoff not verified.
- **IDs:** `opencode/glm-5.3-free` (free lane); `zai-org/GLM-5.3` (weights).
- **Context window:** **204K served on this free lane** (curated `meta.json` and Zen listing agree); 1M native per BenchLM — the cap costs practical headroom vs the paid/self-hosted sibling.
- **Modalities:** **Text in / text out** on this entry; vision lives in the separate GLM-5V family. Reasoning yes; tool calls yes; JSON yes. Curated `meta.json` agrees ("Text in/out") — one of the honest folders.
- **Pricing (as of 2026-10-02):** **$0** on the Zen free promotional tier; paid Z.AI hosting ~$1.40/$4.40 per 1M (sibling folder); open-weights self-host. Cost excluded from Overall.
- **Architecture:** open-weight MoE (Z.AI); params undisclosed in the retrieved card.

### Raw benchmarks found

> Same-weight rows verified via the qualifying `Kimi_K3.md` BenchLM scorecard in this folder (identical model to my `model/glm-5.3/` report, where the full sourcing trail lives): TB 2.1 88.2 (Vals 71.5), GDPval-AA 1769, GPQA 91.7 AA, HLE 42.3 (62.5 w/tools), AA-LCR 79.7, SWE-bench Vals 95.4, LCB 80.5, FrontierSWE 78.1, DeepSWE 66.9, AA Coding Index 74.8, AA Intelligence Index 44.8, BenchLM 65.55/#26-of-507, Omniscience 33.9/29.6, Design Arena 1312. Cross-reference: `model/glm-5.3/Qwen_3.8_Flash.md` — not double-counted as a new model.

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (AA lane; Vals 71.5%); terminalBench3: 28.3%; Toolathlon-Verified **73.0%**; CyberGym **84.5%**
- GDPval-AA: **1769 Elo** (57.3% normalized, top-decile); AA Agentic Index: **53.4%**; τ³-Banking (AA): 50.3%

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA) / 88.1% (Vals); HLE: **42.3%** (62.5% w/ tools — clears the 40% frontier bar); MMLU-Pro 86.8%
- AA-LCR **79.7%**; MLCR-AA 48.3%; CritPt **19.1%**; AA Index **44.8**; BenchLM overall **65.55 / #26**
- AA-Omniscience: accuracy 33.9% / hallucination **29.6%** — mildly hallucinating but informative

Coding:

- SWE-bench (Vals): **95.4%**; LiveCodeBench (Vals): 80.5%; FrontierSWE 78.1 / v2 30.2; DeepSWE 66.9; VulcanBench v3 78.3; AA Coding Index **74.8**; SciCode 59.0

Long context:

- AA-LCR 79.7% at the native window; **no MRCR/RULER row**; and on this free lane the usable window is capped at 204K regardless.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Identical to my `glm-5.3` base scores except where the free-lane serving form genuinely changes the answer (Context cap, $0 tier, Zen-evidence discount on Tool).

- **Tool use: 86/100.** The elite open-weight agentic stack (GDPval 1769, TB 88.2, Toolathlon 73, CyberGym 84.5) stands, discounted 2 points from the base folder's 88 because this promotional lane is benchmarked under a lighter harness and long multi-call sessions hit the 204K wall.
- **Reasoning: 82/100.** GPQA 91.7 + HLE 42.3 (62.5 w/ tools) + LCR 79.7 with only 29.6% hallucination — same model, same score as the base folder; CritPt 19.1 remains the academic-physics soft spot.
- **Context window: 84/100.** The 1M native band (92 in the paid folder) minus the free lane's 204K serving cap — a real, user-visible degradation of the product being rated here, landing in the 200K–500K band (65–84) at its ceiling.
- **Multimodal: 15/100.** Text-only on this ID (band 10–20); Design Arena 1312 is website-preference Elo, not measured multimodality; vision is a separate model family.
- **Coding: 84/100.** SWE 95.4 (Vals) / LCB 80.5 / FrontierSWE 78.1 are frontier open-weight grade — but the free lane's window cap truncates exactly the huge-repo, multi-file workflows the coding rows were earned in, so 2 below the base folder.
- **Cost efficiency: 100/100.** $0 promotional tier for a #26-of-507 flagship — the methodology's $0 = 100 anchor applies literally. Cost excluded from Overall.
- **Overall Score: 70.2/100.** Mean of Tool 86, Reasoning 82, Context 84, Multimodal 15, Coding 84 = 351/5 = 70.2 → **71**. Best fit: **free high-volume agentic coding and tool-calling** — the single best $0 entry in the cohort for real engineering work, provided sessions fit inside 204K and vision needs go elsewhere. Lands just under the folder cohort's 72.4 and my paid-sibling's 73; the text-only multimodal floor (15) is the whole story on any gap, exactly as in the base folder.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: same-weight cross-reference to my `model/glm-5.3/Qwen_3.8_Flash.md` plus the qualifying `Kimi_K3.md` BenchLM scorecard in this folder; free-lane serving facts from curated `meta.json` and the Zen listing. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) this is GLM 5.3 again — one model, two folders; scores deliberately differ only on Context/Coding/Tool serving deltas, (b) the 1M-native-vs-204K-served gap is the defining trait of the free lane, (c) no MRCR row anywhere for this model.
- Revisit trigger: if the Zen free lane lifts to the full 1M window, restore the base folder's Context 92 (Overall → 73); if Z.AI publishes MRCR or a settled GLM-5.3 release date/cutoff, update both folders.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
