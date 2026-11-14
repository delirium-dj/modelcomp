- Source: Z.ai/GLM-5.3-Flash (320B-A18B)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (320B-A18B)
- **Short description:** Z.ai's first natively multimodal GLM-5-series model, open-sourced globally on 2026-08-26 after a highly successful anonymous stealth run as **Ox Alpha** ("牛来") on OpenCode/OpenRouter. A distinct model from GLM-5.3 (code/agent focus) and from GLM-5.3-FlashX (later faster tier). The stealth folder `ox_alpha` is a deleted phantom — research belongs here, per the project identity roster.
- **Provider / access:** Z.ai API (open at launch), ZCode, 智谱清言, GLM Coding Plan; third-party compute from CoresHub (QingCloud), SenseTime's 大装置, LobsterAI; Cambricon Day-0 adaptation. MIT-licensed weights on Hugging Face. OpenAI-compatible API.
- **Release / knowledge:** 2026-08-26 (stealth test from 2026-08-20); knowledge cutoff: no verified public score found.
- **IDs:** `glm-5.3-flash` family ID as cited; stealth name `ox-alpha` / `openrouter/ox-alpha` (lineage only, never a separate folder). No free Zen ID verified.
- **Context window:** **1,048,576 tokens (1M)**.
- **Modalities:** **text, image, video and file in; text out** — natively multimodal with "visual coding" (inspect rendered front-end pages, detect game bugs, check 3D scene coherence); Office documents (PPTX/PDF/DOCX/XLSX) with self-review and aesthetic judgement; ~30T tokens of multimodal pretraining data. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** officially **1/10 of GLM-5.3's price** (1/20 during a limited-time promotion); launch coverage gives **$0.075 / 1M input, $0.25 / 1M output** during the promo (vs DeepSeek-V4-Flash $0.22/$0.66, and Claude Opus 4.8 priced ~40x higher). Free during the anonymous Ox Alpha test period. MIT open weights enable free self-hosting.
- **Architecture:** MoE, **320B total / 18B active** parameters, **45 layers** (down from GLM-4.5's 92 layers / 355B / 32B active); hybrid **sparse + linear attention** (linear for local recursive dependencies, sparse with a lightweight indexer for global recall). IndexPool compresses 4 cache vectors into 1; Manifold-Constrained Hyper-Connections (mHC) for scaling. Attention compute **−3.01x** and KV cache **−4.44x** vs GLM-5.3. SGLang-based EPD inference on **domestic Chinese accelerator clusters** with ~3x end-to-end serving gain over baseline.

### Raw benchmarks found

Agent / tool use:

- Ox Alpha stealth run: **#1** on OpenRouter call volume on day one, record single-day token usage, and **62 trillion tokens processed in six days** on OpenCode (#1 on its usage board)
- Hands-on (智东西 in ZCode): identified actors/characters in an Avengers: Endgame poster; found missing material in a civil-service exam paper and generated answers (one wrong); built a Subnautica-like 3D game from a requirements doc; edited a ~48-minute lecture video into a highlights reel with Chinese subtitles
- Official showcase: **16 hours** of autonomous Blender work with no external assets, producing a ~**400 m²** professional chef's home and test kitchen; a Terraria remake
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** — tied with Claude Opus 4.8, above GLM-5.2; an AA-based comparison in the MiMo-V2.6-Pro article lists GLM-5.3 at **45** (different model, different index version — not merged)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Z.ai Code Bench (vendor "felt" evaluation): programming performance **on par with Claude Opus 4.8** (no numeric score)
- Visual coding workflows and the Terraria/3D-game case studies above (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1,048,576-token window with hybrid sparse/linear attention; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** Record-breaking real-world agent traffic (62T tokens in 6 days), a 16-hour autonomous Blender build, and hands-on video/Office/3D agent tasks; capped by no scored τ-bench/OSWorld/GDPval/Terminal-Bench figure for this exact ID.
- **Reasoning: 88/100.** AA Intelligence Index 57 matching Claude Opus 4.8, in an 18B-active model; capped by no GPQA/HLE numbers and by the 57 being an earlier-index-version figure.
- **Context window: 92/100.** A verified 1,048,576-token window with a purpose-built hybrid attention stack (3.01x less attention compute, 4.44x smaller KV cache); capped by no published long-context retrieval measurement.
- **Multimodal: 93/100.** Native text/image/video/file input with unique visual-coding self-inspection and Office-document aesthetic review; capped by text-only output and no verified audio input.
- **Coding: 88/100.** Vendor code-bench parity with Opus 4.8 plus strong visual/front-end/game/3D coding demonstrations; capped by no published SWE-bench/Terminal-Bench figure and by the vendor-internal nature of the parity claim.
- **Cost efficiency: 98/100.** $0.075/$0.25 promotional per-1M pricing, 1/10 of GLM-5.3 (1/20 promo), ~40x cheaper than the capability-matched Opus 4.8, plus MIT-licensed free weights and efficient domestic-chip serving — the best value in this comparison set. Excluded from Overall.
- **Overall Score: 90/100.** Half-up mean of 87, 88, 92, 93, 88 = 89.6 → 90. Best fit: very high-volume multimodal/visual-coding agent workloads and self-hosted deployments where cost and open weights dominate.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GLM-5.3-Flash (320B-A18B) article (full architecture, 1M context, modalities, AA index 57, MIT weights, stealth identity, case studies), plus launch coverage for the promotional per-token prices. The stealth name `ox-alpha` is treated strictly as lineage: per the project's generated identity roster that phantom folder was deleted and research belongs here. Figures for GLM-5.3 (45) and other models are kept separate by ID and index version. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GLM-5.3-Flash (320B-A18B) — 百度百科 (architecture, 1M context, AA 57, Ox Alpha, MIT)](https://baike.baidu.com/item/GLM-5.3-Flash%20(320B-A18B)/68738632)
  - [GLM-5.3-Flash 实测："牛来"掉马甲 — 百家号 (promo pricing $0.075/$0.25)](https://baijiahao.baidu.com/s?id=1874683451056080456&wfr=spider&for=pc)
