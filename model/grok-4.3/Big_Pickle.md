# Grok 4.3 — findings by Big Pickle

- Source: xAI Grok 4.3 (API model `grok-4.3` / `grok-4.3-latest`, no Zen Free ID)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's mid-2026 flagship general-reasoning model (API release 2026-04-30; superseded by Grok 4.5 / 4.6 but still served) — 1M context, aggressive $1.25/$2.50 pricing, strong agentic tool use (τ²-Bench 98%, GDPval-AA +321 Elo over Grok 4.20) and science reasoning, but mid-pack for agentic coding and weak on long-context QA evals.
- **Provider / access:** xAI API, Chat Completions OpenAI-compatible endpoint (`https://api.x.ai/v1/chat/completions`), `grok-4.3` / `grok-4.3-latest`; also on OpenRouter, Vercel AI Gateway (`spacexai/grok-4.3`), Cloudflare, Vertex. OpenCode Zen: **no Free ID**.
- **Release / knowledge:** 2026-04-17 apps beta / 2026-04-30 public API; knowledge cutoff December 2025.
- **IDs:** `xai/grok-4.3` (= `spacexai/grok-4.3`, `xAI/grok-4.3`). No Zen Free ID.
- **Context window:** 1M tokens total; max output not capped (up to 1M per response per Vercel). ≥200K-token prompts billed at a higher tier.
- **Modalities:** Text + image in, text out (per xAI docs / Cloudflare); native function calling, structured outputs, web search, configurable reasoning effort (none/low/medium/high). Native video input is claimed by secondary coverage but NOT confirmed in xAI's primary docs — treated as unverified.
- **Pricing (as of 2026-09-24):** xAI $1.25 in / $2.50 out per 1M for prompts <200K ($0.20 cached in; batch −20%); $2.50 / $5.00 with $0.40 cached for prompts ≥200K. No Free tier (meta `noFreeId` expected `true`).
- **Architecture:** proprietary; parameters and dense/MoE undisclosed (no official model card published).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **98%** <(xAI/AA launch figures; +5 pts over Grok 4.20; theairankings 97.7%, in line with GLM-5.1)>
- GDPval-AA: **Elo 1500** <(Artificial Analysis; +321 over Grok 4.20's 1179; trails GPT-5.5 xhigh by 276 Elo ≈ ~17% expected win rate)>
- IFBench: **81%** <(AA; carried over from Grok 4.20 0309 v2)>
- Terminal-Bench 2.1: **41.9%** / TB2.0: **43.4%** <(BenchmarkList AA-run, 56th percentile)>
- Tau2-Bench: **88.9%** <(AA via dataconomy)>
- Berkeley Function Calling Leaderboard / Claw-Eval: **no verified public score found**
- AA Agentic Index: **24.2** <(modelpricewatch)>

Reasoning / knowledge:

- GPQA Diamond: **90.1%** <(Artificial Analysis; BenchmarkList 91.4%, 87th percentile — first Grok ≥90%)>
- Humanity's Last Exam: **35.0%** <(AA; BenchmarkList 37.2%, 92nd percentile)>
- AA Intelligence Index: **53** at launch <(AA article, ranked ~38th; later snapshots 37.9–43.9 across deployed tiers — composite drifts)>
- LCR: **67.7%** <(AA via dataconomy)>
- MMLU Pro: **85.8%**; MMMU Pro: **83.1%** <(BenchmarkList)>
- Chatbot Arena: **1442.4 Elo** <(LMSYS via modelpricewatch)>
- AIME 2025 / USAMO: **no verified public score found**

Coding:

- SWE-bench Verified: **71.4%** <(BenchmarkList AA-run, 41st percentile; xAI itself never published SWE-bench and concedes it trails Claude Opus 4.7 on SWE-bench Pro by double-digit points)>
- LiveCodeBench: **84.5%** <(BenchmarkList, 75th percentile)>
- SciCode: **47.3%** <(BenchmarkList, 91st percentile; dataconomy AA 41.9%)>
- Vibe Code Bench v1.1: **19.4%** <(BenchmarkList, 37th percentile)>
- DeepSWE / SWE-Pro: **no verified public score found** (xAI did not release)

Long context:

- No RULER/MRCR published; **Context Arena 12.3%** (BenchmarkList, 2nd percentile) — weak effective long-context QA signal despite the 1M window.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench 98% and GDPval-AA 1500 show elite instruction-following and agentic support; IFBench 81% solid; but TB2.1 41.9% is sub-50 and no BFCL/Claw-Eval exists — mid-80s ceiling.
- **Reasoning: 88/100.** GPQA 90.1–91.4% clears the 90%+ frontier marker; HLE 35% is strong but below the 40%+ top band; AA Index ~53 at launch is well above median (34) though not the 60+ elite mark.
- **Context window: 90/100.** 1M window sits in the ≥1M (95–100) band, but with zero published retrieval benchmarks and a 2nd-percentile Context Arena result there is no evidence of ≥98% retrieval — capped at 90 (max output 1M removes the 64K caveat).
- **Multimodal: 65/100.** Text + image in, text out per primary docs puts it in the +image-in band (60–70); native video input unverified, no non-text output.
- **Coding: 76/100.** LiveCodeBench 84.5% and SciCode 47.3% are decent, but SWE-bench Verified 71.4% plus xAI's own admission of double-digit SWE-Pro deficit to Opus 4.7 and a weak Vibe 19.4% cap it well below the top.
- **Cost efficiency: 90/100.** $1.25/$2.50 (under 200K) with $0.20 cache sits between ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) on the methodology scale → 90; note the ≥200K-tier doubling and no Free tier.
- **Overall Score: 80/100.** Mean of the five non-cost dims (82+88+90+65+76)/5 = 80.2 → **80**. Best for cheap strong reasoning at scale, real-time X research, and agentic support tasks; not the pick for agentic coding or long-context retrieval-heavy work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (xAI docs, Artificial Analysis, BenchmarkList, model trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.3/Big_Pickle.md` — exact assigned stem, dotted version slug.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.3/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Verified benchmarks exist → saved as `.md` (not `.excluded`).