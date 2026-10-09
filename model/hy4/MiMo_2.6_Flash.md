# Hy4 — findings by Mimo v2.6 Flash

- Source: Tencent Hy (Hunyuan)/`Hy4-preview`
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hy4 preview)
- **Short description:** Tencent's open-weight MoE flagship (2026-08-28, Apache 2.0) — 770B total / 49B active, ~1M context — aimed at long-horizon coding and productivity (CodeBuddy/WorkBuddy co-design); internal blind eval edges GLM-5.3 and Kimi K3 on engineering tasks. Preview build with known issues (over-verification, verbose reasoning).
- **Provider / access:** Hugging Face `tencent/Hy4-preview` (+ ModelScope, GitCode, CNB); Tencent Cloud TokenHub API; OpenRouter (Chat Completions). **No OpenCode Zen Free ID** (`noFreeId: true`); self-host via vLLM/SGLang.
- **Release / knowledge:** 2026-08-28 (Tencent news + HF); knowledge cutoff not restated in sources reviewed. FP8 quantized checkpoint shipped alongside BF16.
- **IDs:** `tencent/hy4` (repo meta); `tencent/Hy4-preview` (HF).
- **Context window:** **1M** (~1,048,576; meta: 960K in / 64 out).
- **Modalities:** text in; text out (no vision/audio in card); high-effort thinking + `no_think` mode; MTP speculative decoding layer.
- **Pricing (as of 2026-10-09):** Open weights **Apache 2.0** (free self-host); hosted **$0.834 in / $2.501 out per 1M** (Tencent TokenHub; Forbes ~$0.83 in); OpenRouter catalog now lists the Hy4 preview at **$0.7506 / $2.251** (2026-10-09 re-check); cache read $0.042.
- **Architecture:** MoE **770B total / 49B active**; 78 layers (1 dense FFN + 77 MoE), 256 routed + 1 shared expert, top-8 routed per token; Gated DSA attention, IndexCache; hidden 6144; vocab 120832; 1× MTP layer (10B/0.7B active); ~2.6× params and 4× context vs Hy3 (295B/21B, 256K).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). HF leaderboard rows + Tencent/The Elec-reported internal 12-bench table; blind eval is internal (163 experts, 203 tasks).

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent via The Elec; HF leaderboard rank **#8**, re-checked 2026-10-09; vs Hy3 70.8, Kimi K3 88.3)
- Toolathlon-Verified: **74.1%** (Tencent; HF rank **#5**; vs Hy3 56.2)
- APEX-Agents: **37.1** (Tencent; vs Hy3 24.4)
- SWE Atlas Refactoring: **53.3%** (Tencent; vs Hy3 32.9)
- Blind side-by-side (internal): **2.99/4.00** vs GLM-5.3 2.92 (46.8% W / 12.8% T / 40.4% L) and Kimi K3 2.94 (51.2% W / 7.9% T / 40.9% L) — Tencent internal, not independently verified (TechNode caution)
- GDPval-AA / MCP-Atlas / Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3** (HF leaderboard / Idavidrein/gpqa Diamond View)
- OneMillionBench-plus-tools: **65.4%** (Tencent; vs Hy3 51.6)
- HLE: **43.4%** (text-only, no tools) and **55.4%** (with tools, rank 5) — HF card eval-results, re-checked 2026-10-09 — **fills the first-pass gap**; AA Intelligence Index / ARC-AGI-2: still no verified public score found

Coding:

- DeepSWE: **64.3** (HF leaderboard; vs Hy3 28.0, Qwen3.8-Max 56.6, DeepSeek-V4-Pro 62.7, Kimi K3 67.5 — SCMP/The Elec)
- SWE-bench Pro: **65.7** (HF; **rank #2** on the leaderboard, re-checked 2026-10-09 — beats Kimi K3 63.3)
- SWE-bench Multilingual Resolved: **82.9** (HF; **rank #1** — beats GLM-5.3 81.3, K3 80.8, DS-V4-Pro 77.3; trails Opus 5 configs)
- SkillsBench v1.1: **62.9** (HF; **rank #1**)
- DeepSWE: **64.3** (HF rank **#7**)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window (Gated DSA + IndexCache); MRCR / RULER retrieval quality: no verified public score found

Multimodal:

- **Text-only** product/card surface — no image/video/audio input declared (template: 15)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 85.4, Toolathlon 74.1, APEX 37.1, SWE Atlas 53.3 all jump hard vs Hy3; internal blind win rates over K3/GLM-5.3 are encouraging but not independent; no GDPval/MCP/Tau rows.
- **Reasoning: 85/100.** GPQA 92.3 is frontier-grade science reasoning and HLE is now filled: **43.4% no-tools (clears the 40%+ frontier anchor) / 55.4% with tools (HF rank #5)** — plus OneMillionBench-tools 65.4; missing AA-Index/CritPt still caps breadth; trimmed-up 84→85 on the HLE fill (2026-10-09).
- **Context window: 96/100.** True ~1M / 64K window with dedicated sparse-attention/IndexCache design for long context (retrieval quality curve unpublished — sticker strong, needle accuracy unverified).
- **Multimodal: 15/100.** Text-only declared surface (template rule: 15).
- **Coding: 84/100.** SWE-Pro 65.7 beats K3, Multilingual 82.9 beats GLM-5.3/K3, DeepSWE 64.3 mid-pack vs K3 67.5 — open-frontier coding with clear gen-over-gen gains; trails closed frontier on some rows and preview-status known issues remain.
- **Cost efficiency: 100/100.** Apache 2.0 free weights + cheap hosted ~$0.83/$2.50 — self-host/open anchor = 100.
- **Overall Score: 72/100.** Mean of five quality dims (80+85+96+15+84)/5 = 72.0 → 72 (was 71.8 on 2026-09-22 — Reasoning +1 on the HLE fill, Overall unchanged).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (Tencent newsroom, HF tencent/Hy4-preview + GitHub Tencent-Hunyuan/Hy4-preview, hy.tencent.ai research page, IntuitionLabs analysis, MindStudio, The Elec/SCMP coverage of internal benches); second pass 2026-10-09 re-checked the [HF Hy4-preview card](https://huggingface.co/tencent/Hy4-preview) (HLE 43.4/55.4 fill + leaderboard ranks: SWE-Pro #2, Multilingual #1, SkillsBench #1, TB2.1 #8, Toolathlon #5, DeepSWE #7) — the OpenRouter `tencent/hy4` URL renders no model data and Grokipedia 404; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Gap closed:** HLE **43.4%** (text-only no-tools) / **55.4%** (with tools, rank #5) — first frontier-grade reasoning anchor beyond GPQA; Reasoning 84→85, Overall held at 72.
- **Ranks added:** SWE-bench Pro 65.7 = **#2**, SWE-bench Multilingual 82.9 = **#1**, SkillsBench 62.9 = **#1**, TB2.1 85.4 = #8, Toolathlon 74.1 = #5, DeepSWE 64.3 = #7 — Hy4 sits at the top of several open-weight boards.
- **Coverage:** OpenRouter slug renders no data; Grokipedia 404 — HF card remains the primary live source; AA still has no rows (Index/CritPt gaps persist).
