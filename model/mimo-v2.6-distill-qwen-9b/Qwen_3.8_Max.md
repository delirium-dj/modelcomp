# MiMo V2.6 Distill Qwen 9B — findings by Qwen 3.8 Max

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`; id `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`; no Artificial Analysis page)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** A genuine, downloadable **MIT 9.41B dense SFT research checkpoint** — Xiaomi's transfer of MiMo's agentic experience into a small open base. It is scored (not excluded) because it is a distinct shipped artifact with **11 first-party benchmark rows** in the MiMo-V2.6 technical report (§7.1, Table 6). But it is a **self-host-only research baseline**: no hosted route, no standard reasoning benchmarks, and **every published number is vendor-measured**, so the scores below are discounted accordingly. Its headline is a strong-for-9B **coding** core (SWE-bench Verified 61.1 avg@3, SWE-bench Pro 32.0→44.6 over its Qwen3.5-9B base) sitting on **modest-to-weak agentic/tool results** (Terminal-Bench 2.1 37.1, AutomationBench 30.3, Toolathlon-Verified 35.2). Two attribution traps dominate this folder: **(1) the released checkpoint is the SFT column, not the "+RL" column** (SWE-Verified 66.2 / TB 52.8 belong to *further-trained domain checkpoints*, not this artifact); **(2) MiMo-V2.6-Pro's AA Intelligence Index 46.32 belongs to the 1.02T flagship, not this 9B distill.**

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B (XiaomiMiMo / `MiMo-V2.6-Distill-Qwen-9B`)
- **Short description:** Xiaomi's **Sep-2026 MIT-licensed 9.41B dense** checkpoint produced by **supervised fine-tuning Qwen3.5-9B** on MiMo-generated agentic data (code, cyber, general, visual). Explicitly framed in the MiMo-V2.6 report as **"a promising foundation for further improvement through RL"** and used as the **common SFT initialization** for the paper's domain-specific GRPO experiments — i.e. a **research starting checkpoint**, not a production flagship.
- **Provider / access:** **Self-host only.** Weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), BF16 safetensors ~18.85 GB, SGLang quickstart. **No hosted route on Zen / OpenRouter / HF inference** — the Pro/Flash siblings (and their RL variants) have API surfaces; this distill does not. **No Artificial Analysis page** (the AA index cited across MiMo marketing, 46.32, is MiMo-V2.6-**Pro**'s).
- **Release / knowledge:** Released **21 Sep 2026** (HF / model-page date), published alongside the MiMo-V2.6 tech report (arXiv 2610.11959). Base = Qwen3.5-9B (Qwen Team, 2025).
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (HF). Downstream: 20 finetunes / 7 merges / 54 quants listed on the HF model page.
- **Context window:** **262,144 (nominal, inherited from the Qwen3.5-9B base).** ⚠️ The MiMo report publishes **no context window specific to this checkpoint**; the figure is the base model's. Treat as inherited, not independently verified for the distill.
- **Modalities:** **Text + image in → text out.** The SFT mixture contains **21.2B visual tokens (27.4%)** and the report evaluates the checkpoint on **MiMo Visual Coding (mini)**, so **image input is real and used**. ⚠️ The curated meta's "**video in**" claim is **not corroborated for this checkpoint**: the **video + audio encoders described in §2 of the report belong to the MiMo-V2.6-Pro/Flash backbone** (1.02T/310B with MiMo-ViT + audio tokenizer), **not** to the Qwen3.5-9B base this distill is fine-tuned from. HF tags for the distill list **image-text-to-text**, not video/audio understanding. **Corrected: video/audio = unverified / flagship-only.**
- **Pricing:** **$0 — MIT open weights, self-hosted (18.85 GB BF16); no hosted route exists.** No per-token price because there is no API.
- **Architecture:** **9.41B-parameter dense** model = **Qwen3.5-9B + SFT** (NOT a MiMo MoE). Trained on a **77.4B-token SFT mixture (27.2B loss-bearing tokens)**: Code 23.2B (29.9%), General 22.0B (28.5%), Visual 21.2B (27.4%), Cyber 11.0B (14.2%). `enable_thinking` on/off toggle. This is the **SFT checkpoint prior to any GRPO/RL stage**.

### Raw benchmarks found

> **Provenance: all vendor-measured, from the MiMo-V2.6 technical report (arXiv 2610.11959) §7.1 Table 6, plus the HF model card / HokAI model page.** No neutral harness (Artificial Analysis / Vals / Epoch / swebench.com leaderboard / LMArena) has an entry for this specific distill checkpoint. **Attribution rule applied throughout:** the released artifact = the **"MiMo-V2.6-Distill-Qwen-9B / SFT"** column; the **"+RL"** column is the paper's *separate further-GRPO-trained domain checkpoints* and is **not** credited to this model.

**Agent / tool use (vendor, internal + public):**
- **Terminal-Bench 2.1 (avg@1): 27.0 → 37.1 (SFT)** → 52.8 (RL, not this checkpoint). [public harness]
- **AutomationBench v1.0.6 (avg@1): 5.0 → 30.3 (SFT)** → 33.1 (RL). [public]
- **Toolathlon-Verified (avg@1): 25.9 → 35.2 (SFT)** → 38.0 (RL). [HKUST NLP]
- **OfficeQA Pro (avg@1): 9.0 → 19.5 (SFT)** → 24.8 (RL). [public]
- **JobBench (avg@1): 2.6 → 18.3 (SFT)** → 25.2 (RL). [public]
- **MiMo General Bench (mini): 28.5 → 62.2 (SFT)** → 70.6 (RL). [internal set — unverifiable]

**Coding (vendor, the checkpoint's core strength):**
- **SWE-bench Verified (avg@3): 60.0 (base) → 61.1 (SFT)** → 66.2 (RL, not this checkpoint). Strong-for-9B on a public harness.
- **SWE-bench Pro (avg@3): 32.0 → 44.6 (SFT)** → 47.6 (RL). The report's own marquee delta.
- **MiMo Code Bench (mini): 19.5 → 51.6 (SFT)** → 59.9 (RL). [internal set]
- **Cross-harness SWE-bench Verified mean (Table 7.2, multi-harness panel): 62.3 for the SFT checkpoint** across seven agent harnesses (codex / claude-code / mini-swe-agent included), vs **53.1 for the Qwen3.5-9B base** — a broad, harness-robust +9-point lift. [public harness, vendor-run]

**Reasoning / knowledge (vendor only, thin):**
- **No standard reasoning benchmark is published for this checkpoint** — no AIME, GPQA-Diamond, HLE, MATH, LiveCodeBench, or ARC. The only "general" figure is the **internal MiMo General Bench (62.2)**, which is **not independently reproducible**. Base Qwen3.5-9B is reasoning-capable (`enable_thinking`), but the report transfers no verifiable reasoning number onto the distill.

**Vision / multimodal (vendor):**
- **MiMo Visual Coding (mini): 61.7 (base) → 64.0 (SFT)** → 72.4 (RL). [internal set] — confirms image-conditioned generation is exercised, but on a **vendor-authored** visual-coding suite, not a neutral VLM benchmark (no MMMU / MMBench / OCRBench published).

**Long context:**
- **None published specific to the checkpoint.** Only the inherited ~262K base window (see Model card caveat). No needle/MRCR/RULER evidence for the distill.

**Speed / cost:**
- **Cost $0 self-host** (MIT). **No throughput measured** (no AA Speed page, no hosted endpoint to profile); hardware burden is the 18.85 GB BF16 download + local GPU.

**Meta-verification (curated `meta.json` vs sources):**
- ✅ **Correct:** 9.41B dense SFT of Qwen3.5-9B; MIT; Sep 2026; SWE-bench Verified 61.1 / TB 2.1 37.1 (confirms these are the SFT, not RL, figures); self-host only / no hosted route; $0; the SWE-Pro 32.0→44.6 delta; "no standard reasoning benchmarks"; "every published score vendor-measured."
- ⚠️ **Over-claim corrected:** `modalities: "Text, image, video in"` → **video (and audio) is flagship-only (§2 MiMo-ViT + audio encoders on Pro/Flash); the Qwen3.5-9B-based distill's HF tags and evidence support text + image only.**
- ⚠️ **Caveat added:** `contextWindow: "262,144"` is **inherited from the base**, not published for this checkpoint.

> **Self-reported:** every quantitative claim above originates from Xiaomi's own report / model card. The 11-row Table 6 is a clean base→SFT→RL ladder, and the "improves on base in all reported evaluations" framing is self-consistent, but no third party has reproduced these. Discounted but usable because the checkpoint is a real, distinct, downloadable artifact (per the `pixel_canary` / `omen-alpha` precedent — score a genuine shipped artifact, don't exclude it for thin/own-only evidence).

### Normalized scores (1–100)

- **Tool use: 52/100.** Genuine agentic lift over base (TB 2.1 27.0→37.1, AutomationBench 5.0→30.3, Toolathlon 35.2), but **absolute results are modest-to-weak** and heavily weighted on **internal MiMo sets** (General 62.2) that can't be verified.
- **Reasoning: 58/100.** `enable_thinking` base is reasoning-capable, but **zero standard reasoning benchmarks** (no AIME/GPQA/HLE/LiveCodeBench) are published for the distill — only an internal general bench. Low confidence, mid value.
- **Context window: 74/100.** ~262K nominal supports long agentic trajectories, but the window is **inherited from Qwen3.5-9B and never independently verified for this checkpoint** (no long-context eval).
- **Multimodal: 65/100.** Real **image input** (21.2B visual SFT tokens + MiMo Visual Coding evals), but exercised only on a **vendor-authored visual-coding suite** with no neutral VLM benchmark, and the meta's **video/audio claim is flagship-only, not this model.** Text output.
- **Coding: 66/100.** The checkpoint's clear strength: **SWE-bench Verified 61.1 / SWE-Pro 44.6** with a **harness-robust 62.3 cross-harness mean** — strong *for a 9B dense model*, but all **vendor-run** and no public leaderboard corroboration.
- **Cost efficiency: 78/100.** **$0 MIT self-host** is the best possible price, offset by the **18.85 GB BF16 hardware burden and total absence of a hosted route**. *(Scored; not counted in Overall.)*
- **Overall Score: 63/100.** Half-up mean of the five quality dims (52 + 58 + 74 + 65 + 66)/5 = **315/5 = 63.0 → 63**. **Curated `average.md` = 63.3 → div −0.3** (a small, defensible gap: the report lands on the vendor-only discount and the missing reasoning benchmarks).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**arXiv 2610.11959 "MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement," LLM-Core Xiaomi** — §7.1 + Table 6 = the authoritative 11-row base→SFT→RL ladder for `MiMo-V2.6-Distill-Qwen-9B`: SWE-Verified 60.0→**61.1**→66.2, SWE-Pro 32.0→**44.6**→47.6, TB 2.1 27.0→**37.1**→52.8, AutomationBench 5.0→**30.3**, Toolathlon 25.9→**35.2**, OfficeQA 9.0→**19.5**, JobBench 2.6→**18.3**, MiMo Code/Cyber/General/Visual-internal sets; confirms the released checkpoint is the **SFT** column and the 77.4B/27.2B-loss token mixture breakdown (Code 23.2 / General 22.0 / Visual 21.2 / Cyber 11.0); §2 confirms the **MiMo-ViT + audio encoders belong to Pro/Flash, not the Qwen3.5-9B-based distill**; **HokAI model page** — corroborates 9.41B dense SFT of Qwen3.5-9B, 21 Sep 2026, MIT, text + image in (no video/audio evidence for this checkpoint), no published checkpoint-specific context window, no hosted API, 20 finetunes / 54 quants; **HuggingFace `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`** — weights, image-text-to-text tags, BF16 ~18.85 GB, SGLang quickstart; **Artificial Analysis** — **no page for the distill** (the AA Intelligence Index 46.32 quoted for MiMo is **MiMo-V2.6-Pro**'s 1.02T flagship, explicitly guarded out); curated meta verified — SWE-61.1/TB-37.1/$0/self-host deltas all confirmed; "video in" corrected to text+image; "262,144" flagged as inherited-from-base. **No AA page, no hosted route → all vendor-measured and discounted.**
- Future sources: if a neutral harness (AA / Vals / swebench.com / tbench.ai / LMArena) evaluates the `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` HF weights directly, or if a **standard reasoning benchmark (AIME/GPQA/HLE) is published for the distill**, replace these vendor-only figures with reproduced values. **Guard against** (a) importing the **"+RL" domain-checkpoint** scores (SWE 66.2 / TB 52.8) onto the released SFT artifact, and (b) attributing **MiMo-V2.6-Pro/Flash's** AA index 46.32 or its video+audio modality to this 9B Qwen-based distill.
