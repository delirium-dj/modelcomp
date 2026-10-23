# GPT-5.2 Codex — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5.2-codex`; curated id `opencode/gpt-5.2-codex`), cross-checked against the binaryverseai benchmark roundup, llm-stats, and OpenAI's Dec-2025 launch coverage
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's **agentic-coding specialization of the GPT-5.2 line** — the "Codex" variant tuned for autonomous software engineering, terminal operation, and security work rather than general chat. Its defining feature is **native context compaction** (it summarizes/condenses its own working context to sustain very long coding sessions without blowing the window). It posted first-party **SOTA on SWE-Bench Pro and Terminal-Bench 2.0** and a standout cybersecurity suite, and was flagged by OpenAI as their **most cyber-capable deployed model** (still reported *below* the Preparedness "High" threshold).
- **Provider / access:** OpenAI first-party API / Codex tooling; **paid only, no free lane**; Responses API.
- **Release / knowledge:** GA announced **2025-12-18**, indexed by llm-stats **2026-01-14**; knowledge cutoff not separately published (5.2 family).
- **IDs:** `gpt-5.2-codex`; siblings `gpt-5.2` / `gpt-5.2-thinking`, `gpt-5.1-codex-max`, `gpt-5.3-codex`.
- **Context window:** **400,000 total**; **272,000 max input**; **128,000 max output** — extended in practice by native compaction.
- **Modalities:** **text + image in**, text out; reasoning yes; agentic tool/terminal use is the core design target.
- **Pricing (as of 2026-10-23):** **$1.75/M input, $14.00/M output**, **$0.175/M cached read**.
- **Architecture:** GPT-5.2-class model with Codex post-training + context-compaction loop.

### Raw benchmarks found

> **Provenance note:** the figures below are OpenAI first-party-reported on **recognized third-party benchmarks** (SWE-Bench Pro, Terminal-Bench 2.0, CTF/CVE suites) — better than pure vendor-internal numbers, but still run/selected by OpenAI, so read as directional SOTA claims rather than independently co-run results. Community-reported SWE-bench *Verified* ~80 (r/codex) is **not authoritative** and is not scored.

Agentic coding / terminal (first-party on standard suites):

- **SWE-Bench Pro: 56.4%** — leads GPT-5.1-Codex-Max (50.8%) and GPT-5.2-Thinking (55.6%); claimed SOTA
- **Terminal-Bench 2.0: 64.0%** — leads 5.1-Codex-Max (58.1%) and 5.2-Thinking (62.2%); claimed SOTA

Cybersecurity:

- **Professional CTF (pass@12): 88%**
- **CVE-Bench blind 0-day (pass@1): 87%**
- **Cyber Range (combined pass rate): 72.7%**

AI research / autonomy:

- **PaperBench-10 (pass@1): 43%**
- **MLE-Bench-30 (pass@1): 10%** (its weakest showing — not a strong autonomous-ML-research model)

Reasoning / knowledge:

- No independent GPQA-Diamond / HLE / AIME absolute published specifically for the *Codex* variant as of 2026-10-23 (5.2-line reasoning carried implicitly, not re-scored here).

### Normalized scores (1–100)

- **Tool use: 90/100.** Built for agentic operation — native context compaction, terminal-benchmark SOTA (64.0%), and a top cyber suite evidence real multi-step tool/terminal orchestration; this is the model's home turf and the evidence is strong.
- **Reasoning: 82/100.** Inherits the GPT-5.2 reasoning class (it clears 5.2-Thinking on coding/terminal tasks), but as a *Codex* specialist its general-reasoning absolutes aren't independently republished, and weak MLE-Bench (10%) caps how high research-grade autonomous reasoning can be scored.
- **Context window: 80/100.** **400K total / 272K input / 128K output** is genuinely large, and native compaction meaningfully extends effective working span for long sessions; docked only for being below the 1M class and for compaction being a lossy summarize rather than true full-window recall.
- **Multimodal: 55/100.** Text + image input (image-grounded coding/UI work) — clearly above text-only, but no audio/video input and no independent vision eval; modest by design for a code-centric model.
- **Coding: 92/100.** Its crown: first-party **SOTA on SWE-Bench Pro (56.4%) and Terminal-Bench 2.0 (64.0%)**, plus an exceptional cyber suite (CTF 88%, CVE-Bench 87%). Discounted slightly because the runs are OpenAI-selected rather than third-party co-run, but this is a legitimately top agentic coder.
- **Cost efficiency: 70/100.** $1.75 input is cheap; $14/M output is the real cost for verbose agentic sessions, mitigated by $0.175 cached reads and by compaction reducing context growth. Mid-tier overall.
- **Overall Score: 79.8/100.** Half-up mean of the five quality dims (90+82+80+55+92)/5 = 79.8. Best fit: **long-horizon autonomous software engineering, terminal-driven agents, and security/CTF work** where compaction + agentic SOTA matter more than raw general-reasoning breadth. Held below the pure frontier-reasoning tier because it is a *specialist*: general absolutes are carried from the 5.2 line rather than independently proven, and autonomous-ML-research (MLE-Bench 10%) is its clear weak point.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **binaryverseai** benchmark roundup (the comparison table with columns `GPT-5.1-Codex-Max | GPT-5.2-Thinking | GPT 5.2 Codex`, giving SWE-Bench Pro 56.4%, Terminal-Bench 2.0 64.0%, Professional CTF pass@12 88%, CVE-Bench pass@1 87%, Cyber Range 72.7%, PaperBench-10 43%, MLE-Bench-30 10%), OpenAI's 2025-12-18 launch coverage (agentic-coding specialization, native context compaction, "most cyber-capable deployed model" below Preparedness High), and llm-stats (GA indexed 2026-01-14). Curated `meta.json` (not scaffolded) supplies 400K/272K/128K, text+image, and $1.75/$14/cached-$0.175. Scores are normalized 1–100 interpretations; benchmark figures are **first-party on recognized third-party suites** — treated as directional SOTA (coding/tool-use scored high but slightly discounted for lack of independent co-run), general reasoning inferred from the 5.2 lineage and capped by weak MLE-Bench, community SWE-bench Verified ~80 excluded as unauthoritative.
- Revisit trigger: an independent Artificial Analysis / third-party re-run of `gpt-5.2-codex` on SWE-Bench Verified + Terminal-Bench, or published general-reasoning absolutes (GPQA/HLE) for the Codex variant, confirming or correcting OpenAI's SOTA claims.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
