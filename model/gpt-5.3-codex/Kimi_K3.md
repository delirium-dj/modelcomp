# GPT-5.3-Codex — findings by Kimi K3

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's most capable agentic coding model (Feb 2026): merges GPT-5.2-Codex frontier coding with GPT-5.2 reasoning/knowledge work, runs 25% faster, and expands Codex from writing/reviewing code to operating a computer end-to-end (terminal, web dev, docs, data). First OpenAI model classified High capability for cybersecurity under the Preparedness Framework (some risky requests route to GPT-5.2).
- **Provider / access:** Paid ChatGPT plans across Codex app, CLI, IDE extension, and web; OpenAI API via the **Responses API only** (`gpt-5.3-codex`, default snapshot; Chat Completions/Batch/Realtime not supported per model docs). Steerable mid-task with frequent progress updates.
- **Release / knowledge:** Released 2026-02-05 (official announcement). Knowledge cutoff Aug 31, 2025 (official model docs).
- **IDs:** `openai/gpt-5.3-codex` (Responses API; reasoning_effort low/medium/high/xhigh; tools: function_calling, web_search, hosted_shell, skills). No Free ID exists on OpenCode Zen.
- **Context window:** 400,000 tokens total; 272,000 max input; 128,000 max output (official model docs).
- **Modalities:** Text + image in; text out. Streaming, structured outputs, prompt caching supported. No audio/video input; no non-text output.
- **Pricing (as of 2026-10-01):** $1.75 / $14 per MTok (input/output), cached input $0.175 (90% off) — official model docs; same pricing as GPT-5.2-Codex. Codex access included with paid ChatGPT plans.
- **Architecture:** Proprietary; co-designed/trained/served on NVIDIA GB200 NVL72 systems (official announcement). Notably, the Codex team used early versions of the model to debug its own training and deployment.

### Raw benchmarks found

All numbers from OpenAI's official "Introducing GPT-5.3-Codex" (2026-02-05), xhigh reasoning effort.

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (new industry high vs GPT-5.2-Codex 64.0%)
- OSWorld-Verified (computer use): **64.7%** (humans score ~72% per OpenAI; screenshot-based desktop tasks)
- Cybersecurity Capture-the-Flag: **77.6%** (vs GPT-5.2-Codex 67.4%); first model directly trained to find software vulnerabilities (system-card classified High cyber capability)
- Tau3-Banking / Claw-Eval / GDPval-AA (as an Elo): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE: **no verified public score found** for this version (OpenAI positions it as combining GPT-5.2's reasoning/knowledge; GPT-5.2 Thinking published GPQA 92.4% / HLE 34.5% — separate model, listed for context only)
- GDPval (wins-or-ties): **70.9%** — matches GPT-5.2 (high) on well-specified knowledge work across 44 occupations
- LCR / MLCR / CritPt: **no verified public score found**

Coding:

- SWE-Bench Pro (public): **56.8%** (SOTA; vs GPT-5.2-Codex 56.4%, GPT-5.2 55.6%) — achieved with fewer tokens than any prior model (vendor claim)
- SWE-Lancer IC Diamond: **81.4%**
- Terminal-Bench 2.0 **77.3%** (also listed under tool use; a terminal-skills coding-agent benchmark)
- SWE-bench Verified / LiveCodeBench / SciCode for this version: **no verified public score found**

Long context:

- 400K native window with Responses `/compact` workflow support (platform feature); **no MRCR/RULER/GraphWalks numbers published for this version**.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 77.3% (industry high), OSWorld-Verified 64.7% near human 72%, and 77.6% cyber CTF are strongly frontier for agentic execution; capped by missing Tau3/Claw-Eval/MCP-Atlas numbers for this specific version.
- **Reasoning: 90/100.** OpenAI positions it as GPT-5.2's reasoning merged into the Codex line and it matches GPT-5.2's 70.9% GDPval; no version-specific GPQA/HLE publication keeps it from the very top band.
- **Context window: 78/100.** 400K-total/272K-in is mid of the 200K–500K tier (65–84); long-horizon agentic work is the design goal (`/compact` supported) but no retrieval benchmark (MRCR/RULER) is published for this version.
- **Multimodal: 65/100.** Officially text+image in, text out (model docs) — the "+image in" band (60–70); OSWorld vision-based computer use pulled to the top of the band; no audio/video input, no non-text output.
- **Coding: 94/100.** SWE-Bench Pro SOTA 56.8%, SWE-Lancer 81.4%, Terminal-Bench 2.0 77.3%, plus demonstrated multi-day autonomous app/game builds — clears the frontier coding references and is the release's headline dimension.
- **Cost efficiency: 70/100.** $1.75/$14 per MTok (cached input $0.175) — same price point as GPT-5.2, between the ~88 and ~60 methodology references; 25% faster runs and vendor-claimed token efficiency improve cost-per-task.
- **Overall Score: 83/100.** Half-up mean of the five quality dims: (88 + 90 + 78 + 65 + 94) / 5 = 83.0 → 83. Best fit: frontier agentic coding/computer-use execution — long-running Codex sessions, terminal work, multi-day builds — with GPT-5.2-class reasoning; overkill for cheap bulk tasks.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.3-Codex", 2026-02-05 incl. appendix table; official OpenAI model docs for `gpt-5.3-codex` specs/pricing/endpoints); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
