# GPT-5.3-Codex — findings by Kimi K3

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's most capable agentic coding model (Feb 2026): merges GPT-5.2-Codex frontier coding with GPT-5.2 reasoning/knowledge work, runs 25% faster, and expands Codex from writing/reviewing code to operating a computer end-to-end. First OpenAI model classified High capability for cybersecurity under the Preparedness Framework.
- **Provider / access:** Paid ChatGPT plans across Codex app, CLI, IDE extension, and web; OpenAI API via the **Responses API only** (`gpt-5.3-codex`, default snapshot).
- **Release / knowledge:** Released 2026-02-05 (OpenCode Data confirms); knowledge cutoff 2025-08-31 (OpenCode Data; official model docs agree).
- **IDs:** `openai/gpt-5.3-codex` (Responses API; reasoning_effort low/medium/high/xhigh). No Free ID exists on OpenCode Zen.
- **Context window:** 400,000 tokens total; 128,000 max output (OpenCode Data catalog; matches official model docs).
- **Modalities:** Text + image + **PDF** in (OpenCode Data catalog — CORRECTION vs my first pass which read the docs as text+image only); text out. Streaming, structured outputs, prompt caching; no audio/video input.
- **Pricing (as of 2026-10-11):** $1.75/M input, $14/M output, cached input $0.17 (OpenCode Data catalog; matches official docs). Codex access included with paid ChatGPT plans.
- **Architecture:** Proprietary; co-designed/trained/served on NVIDIA GB200 NVL72 systems (official announcement).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (new industry high vs GPT-5.2-Codex 64.0%) (official announcement)
- OSWorld-Verified (computer use): **64.7%** (humans score ~72% per OpenAI; screenshot-based desktop tasks)
- Cybersecurity Capture-the-Flag: **77.6%** (vs GPT-5.2-Codex 67.4%); first model directly trained to find software vulnerabilities (system-card classified High cyber capability)
- SWE-Atlas (Scale leaderboards — independent, new this pass): Codebase QnA **32.6**, Refactoring **42.38**, Test Writing **38.98**
- Tau3-Banking / Claw-Eval / GDPval-AA (as an Elo): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE: **no verified public score found** for this version (GPT-5.2 Thinking published GPQA 92.4% / HLE 34.5% — separate model, listed for context only)
- GDPval (wins-or-ties): **70.9%** — matches GPT-5.2 (high) on well-specified knowledge work across 44 occupations
- LCR / MLCR / CritPt: **no verified public score found**

Coding:

- SWE-Bench Pro (public): **56.8%** (SOTA; vs GPT-5.2-Codex 56.4%, GPT-5.2 55.6%) — achieved with fewer tokens than any prior model (vendor claim)
- SWE-Lancer IC Diamond: **81.4%**
- Terminal-Bench 2.0 **77.3%** (also listed under tool use)
- SWE-bench Verified / LiveCodeBench / SciCode for this version: **no verified public score found**

Long context:

- 400K native window with Responses `/compact` workflow support; 128K max output catalog-verified; **no MRCR/RULER/GraphWalks numbers published for this version**.

### Normalized scores (1–100)

- **Tool use: 88/100.** Unchanged: TB 2.0 77.3% (industry high), OSWorld-Verified 64.7% near human, 77.6% cyber CTF; capped by missing Tau3/Claw-Eval/MCP-Atlas for this version.
- **Reasoning: 90/100.** Unchanged: GPT-5.2-class reasoning merged in (GDPval 70.9%); no version-specific GPQA/HLE keeps it from the top band.
- **Context window: 78/100.** Unchanged: 400K-total window mid-tier; `/compact` supported; no retrieval benchmark published.
- **Multimodal: 68/100.** Raised from 65: the current catalog lists **PDF input** alongside image (first pass read text+image only) — still no audio/video, text-only output caps it.
- **Coding: 94/100.** Unchanged: SWE-Bench Pro SOTA 56.8% + SWE-Lancer 81.4% + TB 2.0 77.3%; independent Scale rows (SWE-Atlas 32.6/42.4/39.0) are consistent with the tier and don't dislodge the release's headline dimension.
- **Cost efficiency: 70/100.** Unchanged, verified: $1.75/$14 (cached $0.17); 25% faster runs improve cost-per-task.
- **Overall Score: 84/100.** Half-up mean of the five quality dims: (88 + 90 + 78 + 68 + 94) / 5 = 83.6 → 84 (raised from 83 on the verified PDF input; Cost never counts). Best fit: frontier agentic coding/computer-use execution — long-running Codex sessions, terminal work, multi-day builds.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: public internet research (OpenAI "Introducing GPT-5.3-Codex" 2026-02-05 appendix + model docs; **second pass**: OpenCode Data `openai/gpt-5-3-codex` — catalog verification incl. the newly surfaced PDF input modality, plus Scale SWE-Atlas independent rows). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
