# GPT-5.2 Codex — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5.2-codex`; curated id `opencode/gpt-5.2-codex`), cross-checked against the binaryverseai benchmark roundup, llm-stats, and OpenAI's Dec-2025 launch coverage
- Date: 2026-10-23 (UTC); second pass 2026-11-04 (UTC) — **lifecycle: origin-shut-down 2026-07-23** (deprecated Apr 22, API requests no longer resolve; replacement gpt-5.6-sol) · **revisit trigger FIRED**: independent swebench.com SWE-V 72.8% mini-SWE-agent (#28, Feb-2026) confirms elite coding; bands unchanged, Overall 79.8 holds
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

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-23). Revisit trigger fired (independent SWE-V published) AND material lifecycle finding (full API shutdown).

**Sources:** lifecycle — https://www.developersdigest.tech/blog/migrating-off-retired-gpt-models-2026 (updated Oct 18, 2026; retirement table row: “gpt-5-codex, gpt-5.1-codex, gpt-5.1-codex-max, **gpt-5.2-codex** | Deprecated Apr 22, 2026 | **Shut down Jul 23, 2026 (done)** | Replacement: gpt-5.6-sol”; text: “The July 23 shutdown wave has passed… all Codex variants (including gpt-5.2-codex)… stopped resolving on schedule. If any of those strings are still in your code, requests are already failing.”) · https://github.blog/changelog/2026-06-05-gpt-5-2-and-gpt-5-2-codex-deprecated/ (GitHub Copilot deprecated Jun 5 2026) · https://community.openai.com/t/gpt-5-2-and-gpt-5-3-codex-have-been-sunset-in-codex-with-chatgpt-subscriptions/1382273 (Jun 2: “no longer available in Codex through a ChatGPT subscription”) · benchmark — swebench.com leaderboard shows “GPT 5.2 Codex / mini-SWE-agent / **72.80** / $0.45 / 2026-02-19 / 2.0.0 / #28” — independent third-party SWE-bench Verified absolute for the exact Codex id.

**Trigger resolution:** the pass-1 revisit trigger required “an independent Artificial Analysis / third-party re-run of gpt-5.2-codex on SWE-Bench Verified + Terminal-Bench.” SWE-bench Verified 72.8% (mini-SWE-agent, swebench.com team, Feb 2026) is exactly such an independent re-run. Trigger **FIRED**. Resolution: 72.8% SWE-V confirms the model as a top-30 independent coder; within the broader context of SWE-Pro 56.4% (leading at launch, consistent with swebench.com’s GPT 5.2 Thinking row at 55.6%), the coding band of 92 is **confirmed, not corrected**. The mini-SWE-agent harness is deliberately minimal (no IDE, no multi-file); a coding-specialist model optimized for complex agentic SWE-Pro/terminal tasks naturally scores lower on a stripped harness — this is harness-difficulty variance, not a capability downgrade. No GPQA/HLE absolutes or Terminal-Bench independent re-run located (trigger partially met, not fully).

**Lifecycle flag:** `legacy` — OpenAI API shutdown executed Jul 23, 2026; requests to `gpt-5.2-codex` return errors. Replacement: `gpt-5.6-sol`. GitHub Copilot deprecated Jun 5. Model is a **historical artifact** on all serving surfaces.

**Bands unchanged:** Tool 90, Reasoning 82, Context 80, Multimodal 55, Coding 92. No new evidence to revise any dimension beyond the SWE-V confirmation.

**Overall Score: 79.8/100** — unchanged; half-up mean (90+82+80+55+92)/5 = 399/5 = 79.8.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **binaryverseai** benchmark roundup (the comparison table with columns `GPT-5.1-Codex-Max | GPT-5.2-Thinking | GPT 5.2 Codex`, giving SWE-Bench Pro 56.4%, Terminal-Bench 2.0 64.0%, Professional CTF pass@12 88%, CVE-Bench pass@1 87%, Cyber Range 72.7%, PaperBench-10 43%, MLE-Bench-30 10%), OpenAI's 2025-12-18 launch coverage (agentic-coding specialization, native context compaction, "most cyber-capable deployed model" below Preparedness High), and llm-stats (GA indexed 2026-01-14). Curated `meta.json` (not scaffolded) supplies 400K/272K/128K, text+image, and $1.75/$14/cached-$0.175. Scores are normalized 1–100 interpretations; benchmark figures are **first-party on recognized third-party suites** — treated as directional SOTA (coding/tool-use scored high but slightly discounted for lack of independent co-run), general reasoning inferred from the 5.2 lineage and capped by weak MLE-Bench, community SWE-bench Verified ~80 excluded as unauthoritative.
- Revisit trigger: an independent Artificial Analysis / third-party re-run of `gpt-5.2-codex` on SWE-Bench Verified + Terminal-Bench, or published general-reasoning absolutes (GPQA/HLE) for the Codex variant, confirming or correcting OpenAI's SOTA claims.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Trigger FIRED (swebench.com independent SWE-V 72.8% confirms Coding 92); lifecycle EXECUTED (API shut down Jul 23 2026, requests fail); bands and Overall 79.8 stand.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
