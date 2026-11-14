- Source: Alibaba/Qwen3.8-Max
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's 2026-08-03 flagship base model and the first Qwen-Max-tier model ever open-sourced. Updated to the **0902 version** on 2026-09-02 with stronger coding / Cowork / vision. Per the project identity roster, the `qwen-3.8-2400b-a95b` open-weight checkpoint name is a merged duplicate of this canonical `qwen-3.8-max` folder — research belongs here, never in a duplicate folder.
- **Provider / access:** 千问 AI 平台 (Qwen AI Platform) API, 千问办公 / Qoder / Qcoder / QcoderWork / 千问 APP, Alibaba Token Plan, and the 万有无界 enterprise human+agent platform (public beta 2026-09-02). Preview from 2026-07-19.
- **Release / knowledge:** 2026-08-03 (preview 2026-07-19; 0902 update 2026-09-02); knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.8-max` vendor ID as cited; merged lineage IDs `Qwen/Qwen3.8-2.4T-A95B` and `qwen-3.8-2400b-a95b` (never separate folders). No free Zen ID verified.
- **Context window:** **1,000,000 tokens**; can read a 200-page financial-report PDF and videos over **100 hours** long.
- **Modalities:** text and image in, text out (native visual understanding / VL); long video comprehension; autonomous programming from an empty folder, professional-office (Cowork) workflows, long-horizon multi-step agents with tool calling and end-to-end app generation. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** no official rate card in the retrieved Baike page; a secondary Aliyun developer article quotes a domestic **¥12 / 1M input** price (secondary source, not a vendor rate card). Open weights with a commercial-licence condition: MaaS / AI-work-assistant operators with combined revenue above **$50M in any 12 months** need a separate Alibaba licence; translation and e-commerce vertical apps are exempt. The sibling Qwen3.8-27B stays Apache 2.0.
- **Architecture:** Sparse MoE built on the Qwen 3.5 architecture with a hybrid attention mechanism; **2.4 trillion total parameters, ~95B active** per inference. Optimised with Pingtouge (T-Head) self-designed GPUs/EDA co-design. Open weights released. Demonstrated self-evolution: autonomous training-data construction, experiment design and defect localisation without human intervention.

### Raw benchmarks found

Agent / tool use:

- Autonomous programming demo: ran ~**16 days** continuously from an empty folder and independently delivered a self-evolving agent framework (code + full process open-sourced on GitHub)
- Long-horizon tasks across **thousands of interaction rounds** with deep algorithm/strategy reconstruction
- Vision Arena: **#2**
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found
- Artificial Analysis single-task cost comparison: Chinese models' highest was Kimi K3 at **$0.84/task** vs Claude Fable 5.1's **$3.69/task** (~4.4x) — market context, not a Qwen score

Reasoning / knowledge:

- Artificial Analysis score: **40 → 45** after the 0902 update (different index version from other models' 55–65 figures; reported separately, not merged)
- HLE / GPQA Diamond / ARC-AGI / LCR / CritPt / Omniscience: no verified public score found

Coding:

- CodeArena front-end programming leaderboard: **1691** (**#1**), up **22 points** after the 0902 update
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window with 200-page PDF and >100-hour video comprehension; no MRCR / RULER / GraphWalks figure found — no verified public score found

Open-source ecosystem (context, not scored): 460+ open-sourced Qwen models, >3 billion downloads, >300,000 derived models; Qwen3.8-Flash cut training cost by ~90% via architecture changes.

### Normalized scores (1–100)

- **Tool use: 91/100.** A 16-day autonomous project delivery from an empty folder, #2 on Vision Arena and thousands-of-rounds long-horizon strategy reconstruction; capped by no scored τ-bench/OSWorld/GDPval/Terminal-Bench figure for this exact ID.
- **Reasoning: 88/100.** AA score rose to 45 with the 0902 update and the model demonstrated autonomous self-evolution (data construction, experiment design, defect localisation); capped by 45 being well below the 65-point frontier and no GPQA/HLE numbers.
- **Context window: 94/100.** A verified 1M-token window with unusually long real inputs (200-page PDFs, >100-hour video) and sustained multi-thousand-round tasks; capped by no published retrieval benchmark.
- **Multimodal: 90/100.** Native visual understanding, #2 Vision Arena and >100-hour video comprehension; capped by text-only output, no verified audio input, and no published MMMU/video benchmark score.
- **Coding: 93/100.** #1 on CodeArena at 1691 (+22 after the update) plus a genuinely autonomous 16-day software delivery; capped by no SWE-bench Verified / Terminal-Bench figure.
- **Cost efficiency: 88/100.** Open weights for self-hosting, a quoted ¥12/1M domestic input price and MoE/hybrid-attention efficiency, with Chinese models far cheaper per task than US flagships; capped by the $50M-revenue commercial licence restriction and no official rate card. Excluded from Overall.
- **Overall Score: 91/100.** Half-up mean of 91, 88, 94, 90, 93 = 91.2 → 91. Best fit: very long-horizon autonomous coding/Cowork agents, long-document and long-video analysis, and open-weight enterprise self-hosting.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.8-Max article (2.4T/95B MoE, 1M context, CodeArena 1691, AA 40→45, Vision Arena #2, 16-day autonomous project, open-weight licence terms, 0902 update), plus a secondary Aliyun developer article for the ¥12/1M domestic price (labelled secondary). Identity handling follows the project's generated roster: `qwen-3.8-2400b-a95b` is a merged duplicate of this canonical folder, so no duplicate folder is created or written. The AA 40→45 figures are kept separate from other index versions. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Qwen3.8-Max — 百度百科 (architecture, benchmarks, open-source licence, 0902 update)](https://baike.baidu.com/item/Qwen3.8-Max/68312211)
