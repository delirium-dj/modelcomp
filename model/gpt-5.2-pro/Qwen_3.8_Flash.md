# GPT-5.2 Pro — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5.2-pro`; curated id `opencode/gpt-5.2-pro`), cross-checked against OpenAI's "Introducing GPT-5.2" launch, deeplearning.ai's The Batch, llm-stats, swebench.com/vals and introl's infrastructure analysis
- Date: 2026-10-23 (UTC); second pass 2026-11-04 (UTC) — **confirmation, trigger tested/unfired**: no Pro-specific SWE-V / Terminal-Bench absolute or AA Intelligence-Index row under the exact `gpt-5.2-pro` id surfaced; OpenAI's launch table shows SWE-Bench Pro 55.6 / SWE-V 80.0 / SWE-Lancer 74.6 in the *GPT-5.2 Thinking* column with the Pro column as "-" (confirming these are family-tier, not Pro-specific); Vellum reproduces ARC-AGI-2 54.2% (pass-1 match); nexos.ai reports "GPT-5.2-pro-xhigh 31.3%" but harness unattributable (403); bands unchanged, Overall remains 80.8
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's **high-compute "Pro" tier of GPT-5.2** (2025-12-11) — the same base as GPT-5.2 Thinking but run with maximal test-time compute (`xhigh` reasoning) for **top-quality, end-to-end execution of research-grade problems**. Its signature claim is abstract reasoning: it was **the first model to cross 90% on ARC-AGI-1 (Verified)**. It is a deliberate depth-over-speed, depth-over-cost tier (30 s time-to-first-token), sitting above the standard GPT-5.2 and alongside — not instead of — the coding-specialist Codex lane. **Paid-only** (ChatGPT Pro / API).
- **Provider / access:** OpenAI API + ChatGPT Pro; proprietary, hosted-only.
- **Release / knowledge:** 2025-12-11 (llm-stats id `gpt-5.2-pro-2025-12-11`); superseded on the reasoning ladder by the 5.3/5.4/5.5 Pro generations; knowledge cutoff in the GPT-5.2 window.
- **IDs:** `gpt-5.2-pro`; siblings `gpt-5.2` (Thinking, $1.75/$14), `gpt-5.2-codex`, `gpt-5.2-pro` premium tier.
- **Context window:** **400,000 tokens** / **128,000 max output**.
- **Modalities:** **text + image in**, text out; reasoning yes (xhigh); tool calling yes; no audio input.
- **Pricing (as of 2026-10-23):** **$21/M input, $168/M output, $2.10/M cached** — an order of magnitude above standard GPT-5.2, the price of the maximal-compute tier.
- **Architecture:** proprietary; a compute-scaled ("Pro") variant of GPT-5.2 with extended reasoning budget.

### Raw benchmarks found

> **Well-evidenced, largely first-party (OpenAI launch) with independent corroboration** (deeplearning.ai, swebench.com, introl). Numbers are for the GPT-5.2 Pro / GPT-5.2 family as published; SWE-bench rows are the mini-SWE-agent family figure.

Reasoning / knowledge:

- **ARC-AGI-1 (Verified): first model to cross 90%** (OpenAI) — abstract/fluid-reasoning milestone
- **ARC-AGI-2: 54.2%** pass@2 at high reasoning (~$15.72/task; deeplearning.ai) — frontier on the memorization-resistant puzzle set
- **GPQA Diamond: 93.2%** (Pro; GPT-5.2 Thinking 92.4%) — graduate-level science
- **AIME: 100%** · **GDPval: 70.9%** (introl) — olympiad math perfect; strong real-world knowledge-work execution

Coding (agent):

- SWE-bench Verified: **~69%** for the `GPT 5.2` mini-SWE-agent family row (swebench.com); Pro's end-to-end execution is stronger than the standard tier but no separate Pro SWE-bench absolute was transcribed — the dedicated coding lane is `gpt-5.2-codex`, scored separately.

Long context / multimodal:

- 400K window / 128K out; image input (GPT-5.2 vision); **no 5.2-Pro-specific MRCR/RULER retrieval score published**; no audio/image-gen.

### Normalized scores (1–100)

- **Tool use: 82/100.** GPT-5.2's improved tool-calling plus "end-to-end execution" design give it solid agentic capability, but the Pro tier's whole budget goes into *depth* (xhigh reasoning, 30 s TTFT) rather than fast multi-tool orchestration — capable, not its headline.
- **Reasoning: 94/100.** Its defining, near-unmatched strength: **first-ever >90% on ARC-AGI-1**, ARC-AGI-2 54.2, GPQA-D 93.2, AIME 100, GDPval 70.9 — top-of-cohort fluid and graduate reasoning; only the very frontier flagships edge past.
- **Context window: 82/100.** A genuine **400K** window with 128K output is ample for research-length work, but the 1M/2M field (and even 5.5's larger spans) cap it mid-high; no published long-context retrieval proof.
- **Multimodal: 62/100.** Real image understanding (GPT-5.2 vision) in a text+image lane — above text-only models — but **no audio input and no image generation**, and no Pro-specific vision benchmark.
- **Coding: 84/100.** Strong multi-step software execution (family ~69% SWE-V, Pro runs above the standard tier, GDPval 70.9), yet it is not the coding *specialist* — that crown belongs to the Codex lane — so coding is elite-general rather than peak.
- **Cost efficiency: 28/100.** $21/$168 per 1M is among the most expensive tiers in the registry (cached $2.10 only softens repeated prefixes); you are explicitly paying for maximal compute, so value-per-token is the deliberate trade-off, not a strength.
- **Overall Score: 80.8/100.** Half-up mean of the five quality dims (82+94+82+62+84)/5 = 80.8. Best fit: **research-grade, hard reasoning problems** — novel abstract/ARC-style puzzles, graduate STEM, math, and high-stakes end-to-end tasks — where a >90% ARC-AGI-1 ceiling and 93.2 GPQA justify the premium, and where it is *not* the pick for cheap bulk traffic (standard GPT-5.2 / Codex) or maximum context length.

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-23). Confirmation pass: the revisit trigger was explicitly tested against fresh web evidence and **did NOT fire**.

**Sources:** openai.com/index/introducing-gpt-5-2/ (403 WebFetch blocked; snippet via WebSearch — table row: "GPT-5.2 Pro, GPT-5.1 Thinking. SWE-Bench Pro, Public, 55.6%, **‑**, 50.8%. SWE-bench Verified, 80.0%, **‑**, 76.3%. SWE-Lancer, IC Diamond*, 74.6%" — the Pro column is "-" indicating no separate Pro-row SWE absolutes published) · Vellum AI model page (search snippet: "GPT-5.2 Pro: 54.2%" ARC-AGI-2, matches pass-1 deeplearning.ai figure) · nexos.ai/blog/gpt-5-benchmarks/ (403 WebFetch blocked; WebSearch snippet: "GPT-5.2-pro-xhigh 31.3%" — harness name not extractable from snippet, cannot be attributed to SWE-V, TB, or any specific benchmark; excluded from scoring per evidence-hygiene rule) · introl.com infrastructure analysis (403 WebFetch blocked; no snippet surfaced new Pro-specific absolutes) · rdworldonline mentions "GPT-5.2 Pro … GPQA Diamond" and "Opus 4.5 holds top SWE-V at 80.9%" (Opus row belongs to another id, exact-ID rule).

**Trigger resolution:** the pass-1 revisit trigger required "a published GPT-5.2-Pro-specific SWE-bench Verified / Terminal-Bench absolute, or an Artificial Analysis Intelligence-Index row under this exact Pro id." None of the gathered evidence provides any of those three under the `gpt-5.2-pro` ID: the SWE figures (55.6/80.0/74.6) belong to the GPT-5.2 **Thinking** tier (Pro column "-"); the nexos 31.3% cannot be attributed to a named harness; no AA Intelligence-Index row for this exact id was located. Trigger **unfired**.

**What held:** release 2025-12-11 confirmed; $21/$168/cached $2.10 reproduced across snippets; 400K/128K window stable; ARC-AGI-2 54.2% reproduced (Vellum); GPQA-D 93.2 Pro (family mention consistent); first >90% ARC-AGI-1 (no correction found). All five quality bands unchanged.

**Overall Score: 80.8/100** — unchanged; half-up mean (82+94+82+62+84)/5 = 404/5 = 80.8.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — OpenAI "Introducing GPT-5.2" (ARC-AGI-1 first >90%, GPQA-D 93.2 Pro / 92.4 Thinking), deeplearning.ai The Batch (ARC-AGI-2 54.2% pass@2, $15.72/task), introl (AIME 100%, GDPval 70.9%, 400K ctx), swebench.com / vals (GPT 5.2 family ~69% SWE-V mini-SWE-agent), and llm-stats ($21/$168, cached $2.10, 400K/128K, text+image, 30 s TTFT, release 2025-12-11). Curated `meta.json` (not scaffolded) agrees with first-party specs (400K/128K, $21/$168, text+image). Scores are normalized 1–100 interpretations; the SWE-bench figure is the family non-Pro row and flagged as such — Pro-specific coding absolutes were not published and are not fabricated.
- Revisit trigger: a published GPT-5.2-Pro-specific SWE-bench Verified / Terminal-Bench absolute, or an Artificial Analysis Intelligence-Index row under this exact Pro id (later superseded by 5.3+/5.4/5.5 Pro).
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Trigger tested against four web sources (three 403-blocked, snippets extracted via WebSearch); no Pro-specific SWE/TB absolute or AA Index row confirmed; bands and Overall 80.8 stand.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
