# Hy3 — findings by Mimo v2.6 Flash

- Source: Tencent Hy (Hunyuan)/`hy3`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active, Apache 2.0, 2026-07-06) with hybrid fast/slow thinking and 256K context — cost-efficient reasoning/agent model that "rivals flagships 2–5× its size"; full post-training upgrade over the April Hy3 Preview.
- **Provider / access:** OpenCode Zen paid (`tencent/hy3` meta; **no Zen Free ID**, `noFreeId: true`); Tencent Cloud TokenHub API; OpenRouter (incl. `tencent/hy3:free` rate-limited free endpoint); HF `tencent/Hy3`; self-host via vLLM/SGLang (8× H20-3e recommended).
- **Release / knowledge:** 2026-07-06 (preview was 2026-04-23); knowledge cutoff not restated in sources reviewed.
- **IDs:** `tencent/hy3` (meta/OpenRouter); `tencent/Hy3` (HF).
- **Context window:** **256K** native (262,144 on OpenRouter); meta: 256K in / **32K out**; 16K output on some hosts (Swfte).
- **Modalities:** **text + image in; text out** (meta); hybrid fast/slow thinking (no_think / low / high CoT); tool calling yes; structured outputs via API.
- **Pricing (as of 2026-09-22):** TokenHub preview **~$0.18 in / $0.59 out per 1M** (meta); Model Beat list **$0.13 / $0.53**; OpenRouter free endpoint at $0 (rate-limited); Apache 2.0 self-host = infra only. **No OpenCode Zen Free ID.**
- **Architecture:** MoE **295B total / 21B active** + 3.8B MTP layer; 192 experts top-8; 80 layers; hidden 4096; BF16; Apache 2.0.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Tencent/HF launch + Epoch/themodelbeat + Hy4 comparison table (Tencent-reported Hy3 baselines).

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Tencent via Hy4 launch comparison; HF leaderboard also shows a **90.4** row on `harborframework/terminal-bench-2.1` — cite Tencent 70.8 primary, note HF variance)
- Terminal-Bench 2.1 (harborframework via HF): **90.4** (HF `tencent/Hy3` eval table — higher figure; harness differs from Terminus-2)
- Toolathlon-Verified: **56.2%** (Tencent/Hy4 table)
- APEX-Agents: **24.4** (Tencent/Hy4 table)
- SWE Atlas Refactoring: **32.9%** (Tencent/Hy4 table)
- BrowseComp / WideSearch: claimed strong vs peers (Tencent Cloud); exact % not extracted in this pass
- GDPval-AA / MCP-Atlas / Tau3: no verified public score found for Hy3 in this pass

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (Epoch/themodelbeat)
- Humanity's Last Exam: **33.5%** (Epoch/themodelbeat)
- OneMillionBench-plus-tools: **51.6%** (Tencent baseline in Hy4 table)
- Blind expert eval (internal, 270 experts): **2.67/4** vs GLM-5.1 2.51/4 (Tencent internal — not independent)
- AA Intelligence Index / CritPt: no verified public score found

Coding:

- SWE-bench Pro: **46.0 → 57.9%** at GA (Swfte citing Tencent; preview 46.0, release 57.9 — still behind GLM-5.2 62.1)
- SWE-bench Verified: present on HF leaderboard; exact % partially obscured in extract — **71.7** appears as Swe Bench Multilingual Resolved on HF table; treat SWE-Verified as **no cleanly extracted single number** beyond Multilingual 71.7
- SWE-bench Multilingual Resolved: **71.7%** (HF leaderboard)
- DeepSWE: **28.0** (Tencent/Hy4 table — low)
- SciCode: **48.6%** (Epoch/themodelbeat)
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- 256K native window; MRCR / RULER retrieval quality: no verified public score found

Multimodal:

- **Text + image in** (meta) — no video/audio declared → image-in band (60–70)

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 70.8 (Tencent) / strong HF harbor row, Toolathlon 56.2, APEX 24.4, SWE Atlas 32.9 — usable mid-tier agentic stack at 21B active; missing GDPval/MCP/Tau rows and soft APEX/SWE-Atlas cap mid-70s.
- **Reasoning: 81/100.** GPQA 89.7 and HLE 33.5 are strong for a 21B-active model; no AA-Index/CritPt and internal-only blind evals limit frontier claims.
- **Context window: 74/100.** True **256K** window sits in the 200–500K tier (~74 at 256K); no MRCR/RULER curve published.
- **Multimodal: 65/100.** Text + image in (meta) with no video/audio — upper image-only band; no MMMU/CharXiv scores extracted.
- **Coding: 70/100.** SWE-Pro 57.9 GA and Multilingual 71.7 are respectable open coding at low active-params; DeepSWE 28.0 and gap to GLM-5.2/5.3 on SWE-Pro keep it mid-tier.
- **Cost efficiency: 97/100.** ~$0.13–$0.18/$0.53–$0.59 + Apache 2.0 self-host + OpenRouter free endpoint is excellent $/intelligence; not Zen-free (`noFreeId: true`) so not 100 on the evaluated paid tier.
- **Overall Score: 72/100.** Mean of five quality dims (72+81+74+65+70)/5 = 72.4 → 72. Best-fit: budget private agents/Reasoning pipelines that need image input and 256K context at open-weight cost — pair with a stronger coder (GLM-5.x / Hy4) for SWE-Pro-critical work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (GitHub Tencent-Hunyuan/Hy3, HF tencent/Hy3, Tencent Cloud Techpedia, themodelbeat/Epoch, Swfte, OpenRouter hy3:free); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
