# GPT 5.3 Codex — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5.3-codex`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's agentic coding model (Feb 2026), combining frontier coding with GPT-5.2-level reasoning and instruction-steering. The first OpenAI model classified High capability for cybersecurity. Codex-first; also strong on computer use and knowledge work.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.3-codex`; GPT-5.3-Codex available with paid ChatGPT plans across the Codex app/CLI/IDE/web (API access was "soon" at launch). Codex harness.
- **Release / knowledge:** 2026-02-05 (OpenAI "Introducing GPT-5.3-Codex"). Knowledge cutoff not stated.
- **IDs:** `opencode/gpt-5.3-codex` (paid tier; no Free ID on Zen)
- **Context window:** Codex/SWE-Bench runs use 256K–272K context; OpenAI did not publish a distinct headline window for 5.3-Codex (GPT-5.4 later exposed the 1M experimental Codex window). Treated as ~272K.
- **Modalities:** text and image input; text output. Reasoning: yes (xhigh). Tool calls and long-horizon agent execution.
- **Pricing (as of 2026-02-05):** bundled with paid ChatGPT/Codex plans; no standalone API per-token price published at launch. Paid only.
- **Architecture:** proprietary; parameter count undisclosed. Co-designed for NVIDIA GB200 NVL72; 25% faster than its predecessor.

### Raw benchmarks found

> xhigh reasoning effort. The OSWorld figure is the updated 74.0% (OpenAI notes 64.7% was superseded by an API parameter preserving original image resolution).

Agent / tool use:

- Terminal-Bench 2.0: **77.3%**
- OSWorld-Verified: **74.0%** (updated; earlier 64.7%)
- GDPval (wins or ties): **70.9%**
- BrowseComp: **77.3%**
- Toolathlon: **51.9%**
- Cybersecurity Capture-the-Flag Challenges: **77.6%**
- MCP-Atlas / Tau2-bench / Terminal-Bench 2.1 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%**
- HLE / FrontierMath: no verified public score found for 5.3-Codex
- SWE-Lancer IC Diamond: **81.4%**
- ARC-AGI / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-Bench Pro (Public): **56.8%** (vs GPT-5.2-Codex 56.4%, GPT-5.2 55.6%)
- Terminal-Bench 2.0: **77.3%** (vs GPT-5.2-Codex 64.0%)
- SWE-Lancer IC Diamond: **81.4%** (vs GPT-5.2-Codex 76.0%)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No published MRCR/RULER/GraphWalks figure for 5.3-Codex; Codex agentic runs use up to ~256K–272K.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 77.3%, OSWorld 74.0% and BrowseComp 77.3% are top-tier agentic/terminal results; Toolathlon 51.9% and no MCP-Atlas keep it out of the 90s.
- **Reasoning: 79/100.** GPQA 92.6% is strong, but no HLE/FrontierMath/ARC rows are published for this coding-tuned model.
- **Context window: 78/100.** Codex-standard ~272K window (later GPT-5.4 added the 1M experimental Codex window); no 5.3-Codex-specific long-context retrieval benchmark.
- **Multimodal: 70/100.** Text + image input only, oriented to screenshot/computer-use; no audio/video and limited published MMMU-type vision results.
- **Coding: 85/100.** SWE-Bench Pro 56.8% (a new SOTA at its release), Terminal-Bench 2.0 77.3% and SWE-Lancer 81.4%; it is the coding-line predecessor to GPT-5.4.
- **Cost efficiency: 70/100.** Bundled in paid Codex/ChatGPT plans with no per-token API list price at launch; token-efficient and 25% faster, but pricing is subscription-gated (score provisional).
- **Overall Score: 79.2/100.** Half-up mean of the five quality dims (84+79+78+70+85)/5 = 79.2. Best-fit recommendation: long-horizon agentic software engineering and computer-use workflows inside Codex.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (OpenAI "Introducing GPT-5.3-Codex" announcement 2026-02-05 and the GPT-5.4 announcement comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4.md`, using the same headings.
