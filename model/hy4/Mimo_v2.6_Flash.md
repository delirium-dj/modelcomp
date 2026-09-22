# Hy4 — findings by Mimo v2.6 Flash

- Source: Tencent Hy (Hunyuan)/`Hy4-preview`
- Date: 2026-09-22 (UTC)
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
- **Pricing (as of 2026-09-22):** Open weights **Apache 2.0** (free self-host); hosted **$0.834 in / $2.501 out per 1M**, cache read $0.042 (Tencent TokenHub / OpenRouter; Forbes ~$0.83 in).
- **Architecture:** MoE **770B total / 49B active**; 78 layers (1 dense FFN + 77 MoE), 256 routed + 1 shared expert, top-8 routed per token; Gated DSA attention, IndexCache; hidden 6144; vocab 120832; 1× MTP layer (10B/0.7B active); ~2.6× params and 4× context vs Hy3 (295B/21B, 256K).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). HF leaderboard rows + Tencent/The Elec-reported internal 12-bench table; blind eval is internal (163 experts, 203 tasks).

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent via The Elec; vs Hy3 70.8, Kimi K3 88.3)
- Toolathlon-Verified: **74.1%** (Tencent; vs Hy3 56.2)
- APEX-Agents: **37.1** (Tencent; vs Hy3 24.4)
- SWE Atlas Refactoring: **53.3%** (Tencent; vs Hy3 32.9)
- Blind side-by-side (internal): **2.99/4.00** vs GLM-5.3 2.92 (46.8% W / 12.8% T / 40.4% L) and Kimi K3 2.94 (51.2% W / 7.9% T / 40.9% L) — Tencent internal, not independently verified (TechNode caution)
- GDPval-AA / MCP-Atlas / Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3** (HF leaderboard / Idavidrein/gpqa Diamond View)
- OneMillionBench-plus-tools: **65.4%** (Tencent; vs Hy3 51.6)
- HLE / AA Intelligence Index / ARC-AGI-2: no verified public score found for Hy4 preview

Coding:

- DeepSWE: **64.3** (HF leaderboard; vs Hy3 28.0, Qwen3.8-Max 56.6, DeepSeek-V4-Pro 62.7, Kimi K3 67.5 — SCMP/The Elec)
- SWE-bench Pro: **65.7** (HF; **beats Kimi K3 63.3**)
- SWE-bench Multilingual Resolved: **82.9** (HF; beats GLM-5.3 81.3, K3 80.8, DS-V4-Pro 77.3; trails Opus 5 configs)
- SkillsBench v1.1: **62.9** (HF)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window (Gated DSA + IndexCache); MRCR / RULER retrieval quality: no verified public score found

Multimodal:

- **Text-only** product/card surface — no image/video/audio input declared (template: 15)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 85.4, Toolathlon 74.1, APEX 37.1, SWE Atlas 53.3 all jump hard vs Hy3; internal blind win rates over K3/GLM-5.3 are encouraging but not independent; no GDPval/MCP/Tau rows.
- **Reasoning: 84/100.** GPQA 92.3 is frontier-grade science reasoning and OneMillionBench-tools 65.4 is solid; missing HLE/AA-Index/CritPt leaves breadth of reasoning less proven than the single GPQA spike suggests.
- **Context window: 96/100.** True ~1M / 64K window with dedicated sparse-attention/IndexCache design for long context (retrieval quality curve unpublished — sticker strong, needle accuracy unverified).
- **Multimodal: 15/100.** Text-only declared surface (template rule: 15).
- **Coding: 84/100.** SWE-Pro 65.7 beats K3, Multilingual 82.9 beats GLM-5.3/K3, DeepSWE 64.3 mid-pack vs K3 67.5 — open-frontier coding with clear gen-over-gen gains; trails closed frontier on some rows and preview-status known issues remain.
- **Cost efficiency: 100/100.** Apache 2.0 free weights + cheap hosted ~$0.83/$2.50 — self-host/open anchor = 100.
- **Overall Score: 72/100.** Mean of five quality dims (80+84+96+15+84)/5 = 71.8 → 72.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Tencent newsroom, HF tencent/Hy4-preview + GitHub Tencent-Hunyuan/Hy4-preview, hy.tencent.ai research page, IntuitionLabs analysis, MindStudio, The Elec/SCMP coverage of internal benches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
