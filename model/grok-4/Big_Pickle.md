# Grok 4 — findings by Big Pickle

- Source: xAI Grok 4 (API model `grok-4`, no Zen Free ID)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's fourth-generation frontier reasoning model (released as the Grok 4 / Grok 4 Heavy family), trained with reinforcement learning at pretraining scale on the 200k-GPU Colossus cluster; strong on math/science reasoning and real-time X/web search, with a multi-agent "Heavy" variant.
- **Provider / access:** xAI API, Chat Completions-style, `https://api.x.ai/v1/chat/completions` (OpenAI-compatible); also via OpenRouter, Azure AI Foundry, Oracle OCI, Vercel AI Gateway. OpenCode Zen: **no Free ID** (paid only outside Zen).
- **Release / knowledge:** 2025-07-09; knowledge cutoff not publicly disclosed.
- **IDs:** `xai/grok-4` (also `xAI/grok-4`). No Zen Free ID.
- **Context window:** 256K tokens (128K attention, 256K via sub-stacks per xAI); 1M input available via extended-context beta; max output ~33K tokens (devtk; methodology caveat <64K out).
- **Modalities:** Text + image/PDF in, text out; vision + function calling via API (devtk); real-time video/audio in the consumer app. Reasoning mode native. Hybrid tokenizer: 128K BPE vocab + 32K image tokens.
- **Pricing (as of 2026-09-24):** xAI `grok-4` $3.00 in / $15.00 out per 1M, $0.75 cached input; no Free tier (meta `noFreeId: true`). Note: xAI now lists `grok-4` as a retired alias that routes to current Grok models; third-party trackers price the alias as low as $1.25/$2.50 (llmhosting, 2026-09-03).
- **Architecture:** proprietary; parameters undisclosed; RL-trained at Colossus scale (6x compute-efficiency gain over Grok 3 reported).

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling Leaderboard: **62.97%** accuracy <(official, evals.report, Jul 9 2025 — mid-tier BFCL V3, far from 90+% leaders)>
- Vending-Bench (xAI release eval): **$4,694.15 net worth / 4,569 units sold** avg over 5 runs <(xAI official, Jul 9 2025; ~2.3x Claude Opus 4 at $2,077.41 and ~5.6x humans at $844.05)>
- Native tools: code interpreter + real-time X/web search (Tool mode) — no separate harness score found
- Terminal-Bench 2.1: **no verified public score found** (xAI did not publish; none on public TB leaderboards)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.7%** <(Artificial Analysis independent eval; evals.report 87.0%; xAI official 87.5%)>
- Humanity's Last Exam: **25.4%** text-only <(xAI official; 41.0% with tools; 24.5% evals.report; 26.7% AA)>
- ARC-AGI-2: **16.2%** <(xAI official; 15.9% per xAI blog — SOTA for closed models at launch)>
- AIME 2025: **~92–95%** <(sources differ by self-verification/harness: 91.7% awesomeagents, 92.7% AA run, 95% zerotwo; AA "AIME Verified" 87.7%)>
- USAMO 2025: **37.5%** single-agent / **61.9%** Grok 4 Heavy 16-agent <(xAI official)>
- Artificial Analysis Intelligence Index: **33.3** <(AA tracked at launch; evals.report lists 41.5 unverified; benchmark composite differs across gray-box snapshots)>

Coding:

- SWE-bench Verified: **81.0%** <(tpsreport launch snapshot of xAI's reported score; other aggregators list 72.0% on a different harness download — treat as ~72–81% by harness)>
- LiveCodeBench: **79.3%** <(tpsreport launch snapshot; ~79% awesomeagents; ranges in other comparators)>
- HumanEval+: **90.0%** <(AI Value Index comparator)>
- SciCode / AA-SciCode / DeepSWE / SWE-Pro: **no verified public score found**

Long context:

- No RULER / MRCR / Multihop retrieval result publicly reported for `grok-4`; 256K standard + 1M extended beta claim only (xAI rate card + docs).

### Normalized scores (1–100)

- **Tool use: 76/100.** Vending-Bench net-worth #1 ($4.7k) plus native interpreter + X search tools show real agentic strength, but BFCL V3 62.97% is only mid-tier function calling and no TB2.1/Tau3 numbers exist — capped below elite tool handlers.
- **Reasoning: 82/100.** GPQA 87.7% (AA) and HLE 25.4% are just shy of the 90%+/40%+ frontier band; ARC-AGI-2 16.2% and AIME ~92–95% were launch-time SOTA. Missing the 90+ GPQA and ≤40% HLE frontier markers caps it in the low-80s.
- **Context window: 74/100.** 256K sits in the 200K–500K band (200K = 70 → ~74 at 256K); 1M extended beta noted; max output 33K is a <64K caveat and no long-context retrieval benchmark is verified.
- **Multimodal: 62/100.** Image/PDF in + text out via API is the "+image in" band (60–70); real-time video/voice exist only in the consumer app, and there is no audio-in or non-text-out API.
- **Coding: 85/100.** SWE-bench Verified ~81% (launch) and LiveCodeBench 79.3% are solid near-frontier, but no DeepSWE/SciCode/SWE-Pro verdict and LCB below the ~88% elite mark keep it from 90+.
- **Cost efficiency: 60/100.** Paid $3/$15 per 1M maps to methodology's "~$3/$15 = ~60"; $0.75 cache softens effective cost but no Free tier exists on Zen.
- **Overall Score: 76/100.** Mean of the five non-cost dims (76+82+74+62+85)/5 = 75.8 → **76**. Best for hard reasoning (math/science), real-time X research, and agentic tasks; coding is good but not the top daily agent pick today.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (xAI release materials, Artificial Analysis, evals.report, model trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4/Big_Pickle.md` — exact assigned stem, no near-variant.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Verified benchmarks exist → saved as `.md` (not `.excluded`).